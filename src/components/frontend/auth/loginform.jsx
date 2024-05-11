import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Alert, Spin } from 'antd';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../auth/marginer";
import { AccountContext } from './accountContext';

export function LoginForm({ onLogin }) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToPasswordReset } = useContext(AccountContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données à votre backend
    fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Vérifiez si la connexion a réussi
        if (data.message === 'logged avec succès') {
            // Enregistrer le nom de l'organisation dans le stockage local
            localStorage.setItem('username', data.username);

            // Afficher le nom de l'organisation dans la console
            console.log('Nom de l\'organisationn :', data.username);

            // Rediriger l'utilisateur vers la page d'accueil
            navigate('/page');
        } else {
            // Afficher un message d'erreur si la connexion a échoué
            setErrorMessage('L\'adresse email ou le mot de passe est incorrect.');
        }
    })
    .catch(error => console.error('Une erreur est survenue :', error));
  };

  return (
    <div>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <BoxContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Marginer direction="vertical" margin={10} />
      
          <LineText>
          <BoldLink onClick={switchToPasswordReset} href="#">
          <MutedLink >Forget your password?</MutedLink>
          </BoldLink>
        </LineText>
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton type="submit" disabled={loading}>
            {loading ? <Spin /> : 'Signin'}
          </SubmitButton>
        </FormContainer>

        <Marginer direction="vertical" margin="5px" />
        <LineText>
          Don't have an account?{" "}
          <BoldLink onClick={switchToSignup} href="#">
            Signup
          </BoldLink>
        </LineText>
      </BoxContainer>
    </div>
  );
}
