import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen, selectCartItems } from "../../store/cart/cart.selector";
import {CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles"
import {setIsCartOpen} from "../../store/cart/cart.actions";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    
    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(false));
        navigate("/checkout");
    }
    return (
        <Fragment>
            {isCartOpen ? (<CartDropdownContainer>
                <CartItems>
                    {
                        cartItems.length ?
                        cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                        : <EmptyMessage>Cart empty!</EmptyMessage>
                    }
                </CartItems>
                <Button onClick={goToCheckoutHandler}>Checkout</Button>
                </CartDropdownContainer>)
            : null}
        </Fragment>
    )
}
export default CartDropdown;