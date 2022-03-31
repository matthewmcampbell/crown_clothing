import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    min-width: 500px;
    padding: 20px;
    border-style: groove;
    border-radius: 20px;
    @media screen and (max-width: 800px){
        min-width: 80vw;
    }
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`