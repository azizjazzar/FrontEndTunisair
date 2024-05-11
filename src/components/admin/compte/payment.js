import React, { useState } from 'react';
import axios from 'axios';

function PaymentForm() {
  const [formData, setFormData] = useState({
    client: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/update-balance-and-record-credit', formData)
      .then(response => {
        console.log(response.data);
        // Gérer la réponse du serveur, par exemple, afficher un message de succès à l'utilisateur
      })
      .catch(error => {
        console.error('Une erreur est survenue :', error);
        // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="client">Nom du client:</label>
        <input type="text" id="client" name="client" value={formData.client} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="amount">Montant:</label>
        <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default PaymentForm;
