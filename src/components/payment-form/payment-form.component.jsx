import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PaymentFormContainer, FormContainer, PaymentButton} from "./payment-form.styles"

import { clearAllCartItems } from '../../store/cart/cart.actions';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {BUTTON_TYPE_CLASSES} from "../button/button.component";

const PaymentForm = () => {
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();
        
        if (!stripe || !elements || amount <= 0){
            return;
        }

        setIsProcessingPayment(true);
        console.log(amount);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json()).catch(err => console.log(err));

        console.log(response);
        const clientSecret = response.paymentIntent.client_secret;
        
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        })

        setIsProcessingPayment(false);

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                dispatch(clearAllCartItems());
                alert("Payment successful!");
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Payment</h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;