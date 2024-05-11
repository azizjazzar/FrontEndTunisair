import React, { useState } from 'react';
import LoginForm from '../../components/frontend/auth/loginform';
import MyNavbar from './navbar';

const AuthenticatedApp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (email) => {
    // Mise à jour de l'état loggedIn et username lors de la connexion réussie
    setLoggedIn(true);
    setUsername(email);
    console.log('User logged in with email:', email);
    // Vous pouvez également ajouter d'autres actions à effectuer après la connexion, comme la redirection vers une autre page
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    // Perform any additional logout logic (e.g., clearing local storage)
  };

  return (
    <div>
      <MyNavbar loggedIn={loggedIn} username={username} onLogout={handleLogout} />
      <LoginForm onLogin={handleLogin} />
      {/* Your other components/content goes here */}
    </div>
  );
};

export default AuthenticatedApp;


