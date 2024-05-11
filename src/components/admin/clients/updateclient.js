import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typography, Layout, Space } from 'antd';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';
import axios from 'axios';

const UpdateUser = () => {
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    client_type: '',
    officeId: '',
    currency: '',
    corporate_code: '',
    mission_code: '',
    username: '',
    tax_identification_number: '',
    owner: '',
    address: '',
    phoneNumber1: '',
    phoneNumber2: '',
    fax: '',
    email: '',
    password: '',
    state: '',
    logoUrl: ''
  });

  useEffect(() => {
    // Effectuer une requête pour récupérer les détails de l'utilisateur avec l'ID spécifié
    axios.get(`http://localhost:8000/api/users/${id}`)
      .then(response => {
        setFormData(response.data); // Mettre à jour le state avec les données récupérées
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };





  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Effectuer une requête pour mettre à jour les données de l'utilisateur avec les nouvelles données
      await axios.put(`http://localhost:8000/api/users/${id}`, formData);
      setShowAlert(true); // Afficher l'alerte de succès
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
    }
  };





  return (
    <div className="Master">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main   >
            <Layout style={{ padding: '0 24px ' }}>
              <Space size={40} direction="vertical">
                <Typography.Title level={5} style={{ textAlign: 'center' }}   >Mise a jour Client</Typography.Title>

                <Link to="/admin/client">Annuler</Link>


                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="client_type">
                    <Form.Label>Type Client</Form.Label>
                    <Form.Select name="client_type" onChange={handleChange} value={formData.client_type} required>
                      <option value="">Sélectionnez...</option>
                      <option value="0">Corporate</option>
                      <option value="1">Agence A</option>
                      <option value="2">Agence B</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="officeId">
                    <Form.Label>Office ID</Form.Label>
                    <Form.Select name="officeId" onChange={handleChange} value={formData.officeId} required>

                      <option value="tuniabta">Tunisie Agence A</option>
                      <option value="tuniaa">Tunisie Agence A</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="currency">
                    <Form.Label>Devise</Form.Label>
                    <Form.Select name="currency" onChange={handleChange} value={formData.currency} required>

                      <option value="TND">TND</option>
                      <option value="EUR">Euro</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="corporate_code">
                    <Form.Label>Corporate Code Amadeus</Form.Label>
                    <Form.Control type="text" name="corporate_code" onChange={handleChange} value={formData.corporate_code} required />
                  </Form.Group>

                  <Form.Group controlId="mission_code">
                    <Form.Label>Code Emission</Form.Label>
                    <Form.Control type="text" name="mission_code" onChange={handleChange} value={formData.mission_code} required />
                  </Form.Group>

                  <Form.Group controlId="username">
                    <Form.Label>Nom de l'Organisme</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} value={formData.username} required />
                  </Form.Group>

                  <Form.Group controlId="tax_identification_number">
                    <Form.Label>Matricule Fiscal</Form.Label>
                    <Form.Control type="text" name="tax_identification_number" onChange={handleChange} value={formData.tax_identification_number} required />
                  </Form.Group>

                  <Form.Group controlId="owner">
                    <Form.Label>Propriétaire</Form.Label>
                    <Form.Control type="text" name="owner" onChange={handleChange} value={formData.owner} required />
                  </Form.Group>

                  <Form.Group controlId="address">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control type="text" name="address" onChange={handleChange} value={formData.address} required />
                  </Form.Group>

                  <Form.Group controlId="phoneNumber1">
                    <Form.Label>Numéro de téléphone 1</Form.Label>
                    <Form.Control type="tel" name="phoneNumber1" onChange={handleChange} value={formData.phoneNumber1} required />
                  </Form.Group>

                  <Form.Group controlId="phoneNumber2">
                    <Form.Label>Numéro de téléphone 2</Form.Label>
                    <Form.Control type="tel" name="phoneNumber2" onChange={handleChange} value={formData.phoneNumber2} />
                  </Form.Group>

                  <Form.Group controlId="fax">
                    <Form.Label>Fax</Form.Label>
                    <Form.Control type="tel" name="fax" onChange={handleChange} value={formData.fax} />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} value={formData.email} required />
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Office ID Queue</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} value={formData.password} required />
                  </Form.Group>

                  <Form.Group controlId="state">
                    <Form.Label>Actif</Form.Label>
                    <Form.Select name="state" onChange={handleChange} value={formData.state} required>
                      <option value="">Sélectionnez...</option>
                      <option value="1">Oui</option>
                      <option value="0">Non</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="logoUrl">
                    <Form.Label>URL du Logo</Form.Label>
                    <Form.Control type="url" name="logoUrl" onChange={handleChange} value={formData.logoUrl} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Créer
                  </Button>
                </Form>
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Le client a été enregistré avec succès !
                  </Alert>
                )}
              </Space>

            </Layout>
          </main>
        </div>
      </div>
    </div>

  );
};

export default UpdateUser;


