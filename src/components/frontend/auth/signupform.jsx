import React, { useContext ,useState, useEffect} from "react";

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
import { useNavigate } from 'react-router-dom';



export function SignupForm(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
  });

  // Récupérer les données de l'utilisateur du local storage lors de l'initialisation
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user-info')));

  useEffect(() => {
    if (user) {
      // Si l'utilisateur est connecté, naviguer vers '/addProduct'
      navigate('/home');
    }
  }, [navigate, user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill in all the fields');
      return;
    }

    try {
      await signup();
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  const signup = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch('http://localhost:8000/api/register', requestOptions);

      if (!response.ok) {
        const error = await response.json();
        setFormErrors({
          ...formErrors,
          email: error.message || 'Registration failed',
        });
        return;
      }

      const result = await response.json();
      console.log('Result:', result);

      // Mettre à jour les données de l'utilisateur après une inscription réussie
      localStorage.setItem('user-info', JSON.stringify(result));
      setUser(result);

      navigate('/home');
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };
  

  const { switchToSignin } = useContext(AccountContext);
  return (
  
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit} >
        <Input type="text"
                  placeholder="Enter username"
                  name="name"
                  value={formData.name}
                  onChange={handleChange} />
        <Input type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange} />
        <Input  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}/>
        
        <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" >Signup</SubmitButton>
      
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
}