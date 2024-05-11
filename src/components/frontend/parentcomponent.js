// Assurez-vous que `onLogin` est une fonction valide définie dans le composant parent

// ParentComponent.js
import React, { useState } from 'react';
import { LoginForm } from './auth/loginform';

function ParentComponent() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Définition de la fonction onLogin
  const handleLogin = (email) => {
    // Logique de connexion
    setLoggedInUser(email);
  };

  return (
    <div>
      {/* Utilisation de LoginForm avec onLogin passé comme prop */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default ParentComponent;


