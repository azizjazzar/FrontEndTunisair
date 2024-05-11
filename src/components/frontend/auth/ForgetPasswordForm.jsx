import React, { useContext, useState } from "react";
import { Alert, Spin } from 'antd';
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    LineText,
    SubmitButton,
} from "./common";
import { Marginer } from "../auth/marginer";
import { AccountContext } from './accountContext';

const ForgetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage(''); // Réinitialiser le message d'erreur lorsqu'un utilisateur commence à saisir un e-mail
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch('http://localhost:8000/api/reset-password/{token}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Une erreur est survenue lors de la réinitialisation du mot de passe.');
            }
            return response.json();
        })
        .then(data => {
            setErrorMessage('Un e-mail de réinitialisation a été envoyé à votre adresse e-mail.');
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
            <FormContainer onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit" disabled={loading}>
                    {loading ? <Spin /> : 'Reset Password'}
                </SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin="5px" />
            <LineText>
                Already have an account?{" "}
                <BoldLink onClick={switchToSignin} href="#">
                    Signin
                </BoldLink>
            </LineText>
        </BoxContainer>
    );
};

export default ForgetPasswordForm;

