import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signUpStart } from '../../store/user/user.action';
import "./sign-up-form.styles.scss"
import { signUp } from '../../store/user/user.saga';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (displayName && email && password && confirmPassword){
            if (password !== confirmPassword) {
                alert("Passwords don't match!")
                return;
            }
            try {
                // const { user } = await createAuthUserWithEmailAndPassword(email, password);
                // const userDocRef = await createUserDocumentFromAuth(user, { displayName });
                dispatch(signUpStart(email, password, displayName));
                resetFormFields();
            } catch (error) {
                if(error.code === 'auth/email-already-in-use') {
                    alert('Email already in use! Cannot create new user.')
                }
                console.log('Error with email sign up: ', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;