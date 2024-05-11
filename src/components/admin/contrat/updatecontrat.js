import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Typography,  Layout, Space } from 'antd';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';

const UpdateContract = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    clientType: '',
    List: '',
    Libelle: '',
    contractStartDate: '',
    contractEndDate: '',
    minimumGuaranteed: '',
    travelStartDate: '',
    travelEndDate: '',
    isActive: '',
    activateInternetFees: false,
    modifyFeesAmount: '',
    TKXL: '',
    payLater: false,
    payLaterTimeLimit: '',
    minTimeBeforeFlightCC: '',
    minTimeBeforeFlightBalance: '',
    stampInvoice: false,
    additionalClientFees: '',
    Discount: false
  });

  useEffect(() => {
    
    const fetchContractData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/contracts/${id}`);
        const contractData = response.data; // Assuming your API returns contract data
        setFormData(contractData);
      } catch (error) {
        console.error('Error fetching contract data:', error);
      }
    };

    fetchContractData(); // Call the function to fetch contract data
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Si le type de champ est une checkbox, utilisez la valeur booléenne `checked`
    // Sinon, utilisez simplement la valeur du champ
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/contracts/${id}`, formData);
      console.log('Contract updated successfully:', response.data);
      // Optionally, you can redirect the user or perform any other action after successful update
    } catch (error) {
      console.error('Error updating contract:', error);
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
            <Typography.Title level={5} style={{ textAlign: 'center' }}  >Mise a jour Contrat</Typography.Title>
        <Link to="/admin/listecontract/">Annuler</Link> 
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="clientType">
        <Form.Label>Type de client</Form.Label>
        <Form.Control as="select" name="clientType" onChange={handleChange} value={formData.clientType}>
          <option value="clientB2B">Client B2B Corporate</option>
          <option value="clientB2BAgence">Client B2B Agence</option>
          <option value="office">Office Id</option>
          <option value="vendorAggregate">Vendor Aggregate</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="List">
        <Form.Label>Liste</Form.Label>
        <Form.Control type="text" name="List" onChange={handleChange} value={formData.List} />
      </Form.Group>

      <Form.Group controlId="Libelle">
        <Form.Label>Libellé</Form.Label>
        <Form.Control type="text" name="Libelle" onChange={handleChange} value={formData.Libelle} />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="contractStartDate">
            <Form.Label>Date Contrat Début</Form.Label>
            <Form.Control type="date" name="contractStartDate" onChange={handleChange} value={formData.contractStartDate} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="contractEndDate">
            <Form.Label>Date Contrat Fin</Form.Label>
            <Form.Control type="date" name="contractEndDate" onChange={handleChange} value={formData.contractEndDate} />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="minimumGuaranteed">
        <Form.Label>Minimum Garanti</Form.Label>
        <Form.Control type="text" name="minimumGuaranteed" onChange={handleChange} value={formData.minimumGuaranteed} />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="travelStartDate">
            <Form.Label>Date de Voyage Début</Form.Label>
            <Form.Control type="date" name="travelStartDate" onChange={handleChange} value={formData.travelStartDate} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="travelEndDate">
            <Form.Label>Date de Voyage Fin</Form.Label>
            <Form.Control type="date" name="travelEndDate" onChange={handleChange} value={formData.travelEndDate} />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group  controlId="isActive">
        <Form.Label>Actif</Form.Label>
        <Form.Control as="select" name="isActive" onChange={handleChange} value={formData.isActive}>
          <option value="Oui"> Oui</option>
          <option value="Non"> Non</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="activateInternetFees">
        <Form.Check type="checkbox" label="Activer les Frais Internet" name="activateInternetFees" onChange={handleChange} checked={formData.activateInternetFees} />
      </Form.Group>

      <Form.Group controlId="modifyFeesAmount">
        <Form.Label>Modifier le Montant des Frais (Optionnel)</Form.Label>
        <Form.Control type="text" name="modifyFeesAmount" onChange={handleChange} value={formData.modifyFeesAmount} />
      </Form.Group>

      <Form.Group controlId="TKXL">
        <Form.Label>TKXL</Form.Label>
        <Form.Control as="select" name="TKXL" onChange={handleChange} value={formData.TKXL}>
          <option value="2H"> 2H</option>
          <option value="4H"> 4H</option>
          <option value="6H"> 6H</option>
         
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="payLater">
        <Form.Check type="checkbox" label="Payer Plus Tard" name="payLater" onChange={handleChange} checked={formData.payLater} />
      </Form.Group>

      <Form.Group controlId="payLaterTimeLimit">
        <Form.Label>Limite de Temps pour Payer Plus Tard</Form.Label>
        <Form.Control as="select" name="payLaterTimeLimit" onChange={handleChange} value={formData.payLaterTimeLimit}>
    
          <option value="24h">24H</option>
          <option value="48h">48H</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="minTimeBeforeFlightCC">
        <Form.Label>Temps Minimum Avant Vol CC</Form.Label>
        <Form.Control as="select" name="minTimeBeforeFlightCC" onChange={handleChange} value={formData.minTimeBeforeFlightCC || ''}>
         
          <option value="24h">24H</option>
          <option value="48h">48H</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="minTimeBeforeFlightBalance">
        <Form.Label>Temps Minimum Avant Vol Balance</Form.Label>
        <Form.Control as="select" name="minTimeBeforeFlightBalance" onChange={handleChange} value={formData.minTimeBeforeFlightBalance}>
          <option value="6h">6H</option>
          <option value="8h">8H</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="stampInvoice">
        <Form.Check type="checkbox" label="Timbre de Facture" name="stampInvoice" onChange={handleChange} checked={formData.stampInvoice} />
      </Form.Group>

      <Form.Group controlId="additionalClientFees">
        <Form.Label>Frais Supplémentaires Client Final</Form.Label>
        <Form.Control type="text" name="additionalClientFees" onChange={handleChange} value={formData.additionalClientFees} />
      </Form.Group>

      <Form.Group controlId="Discount">
        <Form.Check type="checkbox" label="Discount" name="Discount" onChange={handleChange} checked={formData.Discount}/>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginTop: "20px" , width: "200px", height: "40px"}}  >
        Contrat Enregistrer 
      </Button>

        </Form>
        </Space>
        </Layout>
        </main>
        </div>
        </div>
        </div>
        
  );
};

export default UpdateContract;
