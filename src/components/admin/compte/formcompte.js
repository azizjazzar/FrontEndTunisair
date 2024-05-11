import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Typography, Layout, Space } from 'antd';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';

function CompteAlimentationForm() {
    const [formData, setFormData] = useState({
        client: '',
        montant: '',
        numBulletin: '',
        dateBulletin: '',
        nouvmontant: '',
        description: '',
        image: null
    });

    const [users, setUsers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('http://localhost:8000/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.error('Une erreur est survenue lors de la récupération des utilisateurs :', error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (name === 'client') {
            fetch(`http://localhost:8000/api/solde/${value}`)
                .then(response => response.json())
                .then(data => {
                    setFormData(prevState => ({
                        ...prevState,
                        montant: data.montant
                    }));
                })
                .catch(error => console.error('Une erreur est survenue lors de la récupération du solde du client :', error));
        }
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        // Envoyer les données à votre backend
        fetch('http://localhost:8000/api/comptealimentation', {
            method: 'POST',
            body: formDataToSend
        })
            .then(response => {
                if (response.ok) {
                    console.log('Transaction enregistrée avec succès');
                    setShowAlert(true);
                } else {
                    console.error('Une erreur est survenue lors de l\'enregistrement de la transaction');
                }
            })
            .catch(error => console.error('Une erreur est survenue :', error));
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="Master">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Layout style={{ padding: '0 24px ' }}>
                            <Space size={40} direction="vertical">
                                <Typography.Title level={5} style={{ textAlign: 'center' }} >Alimentation du Compte </Typography.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="client">
                                        <Form.Label>Client</Form.Label>
                                        <Form.Control as="select" name="client" value={formData.client} onChange={handleChange} required>
                                            <option value="">Sélectionner un client</option>
                                            {users.map(user => (
                                                <option key={user.id} value={user.username}>{user.username}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="montant">
                                        <Form.Label>Montant</Form.Label>
                                        <Form.Control type="number" name="montant" value={formData.montant} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="numBulletin">
                                        <Form.Label>Numéro de Bulletin</Form.Label>
                                        <Form.Control type="text" name="numBulletin" value={formData.numBulletin} onChange={handleChange} required />
                                    </Form.Group>

                                    <Form.Group controlId="dateBulletin">
                                        <Form.Label>Date de Bulletin</Form.Label>
                                        <Form.Control type="date" name="dateBulletin" value={formData.dateBulletin} onChange={handleChange} required />
                                    </Form.Group>

                                    <Form.Group controlId="nouvmontant">
                                        <Form.Label>Nouveau Montant</Form.Label>
                                        <Form.Control type="number" name="nouvmontant" value={formData.nouvmontant} onChange={handleChange} required />
                                    </Form.Group>

                                    <Form.Group controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="image">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control type="file" accept="image/*" onChange={handleImageChange} required />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Enregistrer
                                    </Button>
                                    {showAlert && (
                                        <Alert variant="success" onClose={closeAlert} dismissible>
                                            Transaction enregistrée avec succès
                                        </Alert>
                                    )}
                                </Form>
                            </Space>
                        </Layout>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default CompteAlimentationForm;
