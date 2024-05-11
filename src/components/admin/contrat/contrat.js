import React, { useState } from 'react';
import { Form, Button, Row, Col, Checkbox, Select, Typography, Layout, Space, Input } from 'antd';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';
import axios from 'axios';

const { Option } = Select;

const ContractForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    clientType: '',
    list: '',
    libelle: '',
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
    discount: false
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/contracts', formData);
      console.log('Contract created successfully:', response.data);
      // Optionally, you can redirect the user or perform any other action after successful form submission
    } catch (error) {
      if (error.response && error.response.data) {
        // If the error response contains validation errors, display them to the user
        const { errors } = error.response.data;
        console.error('Validation errors:', errors);
        // Optionally, you can set state to display validation errors in your UI
      } else {
        console.error('Error creating contract:', error);
      }
    }
    setLoading(false);
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
                <Typography.Title level={5}>Ajouter Contrat</Typography.Title>

                <Space size={0} direction="horizontal">



                  <Form onFinish={handleSubmit}>
                    <Form.Item label="Type de client" name="clientType" rules={[{ required: true }]}>
                      <Select placeholder="Sélectionnez le type de client" onChange={(value) => handleChange('clientType', value)}>
                        <Option value="clientB2B">Client B2B Corporate</Option>
                        <Option value="clientB2BAgence">Client B2B Agence</Option>
                        <Option value="office">Office Id</Option>
                        <Option value="vendorAggregate">Vendor Aggregate</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="liste" name="liste" rules={[{ required: true }]}>
                      <Input placeholder="Entrez la liste" onChange={(e) => handleChange('list', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Libellé" name="Libelle" rules={[{ required: true }]}>
                      <Input placeholder="Entrez le libellé" onChange={(e) => handleChange('libelle', e.target.value)} />
                    </Form.Item>

                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Date Contrat Début" name="contractStartDate" rules={[{ required: true }]}>
                          <Input type="date" onChange={(e) => handleChange('contractStartDate', e.target.value)} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Date Contrat Fin" name="contractEndDate" rules={[{ required: true }]}>
                          <Input type="date" onChange={(e) => handleChange('contractEndDate', e.target.value)} />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item label="Minimum Garanti" name="minimumGuaranteed" rules={[{ required: true }]}>
                      <Input placeholder="Entrez le minimum garanti" onChange={(e) => handleChange('minimumGuaranteed', e.target.value)} />
                    </Form.Item>

                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="Date de Voyage Début" name="travelStartDate" rules={[{ required: true }]}>
                          <Input type="date" onChange={(e) => handleChange('travelStartDate', e.target.value)} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Date de Voyage Fin" name="travelEndDate" rules={[{ required: true }]}>
                          <Input type="date" onChange={(e) => handleChange('travelEndDate', e.target.value)} />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item label="Actif" name="isActive" rules={[{ required: true }]}>
                      <Select placeholder="Sélectionnez" onChange={(value) => handleChange('isActive', value)}>
                        <Option value="Oui">Oui</Option>
                        <Option value="Non">Non</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Activer les Frais Internet" name="activateInternetFees">
                      <Checkbox onChange={(e) => handleChange('activateInternetFees', e.target.checked)}>Activer</Checkbox>
                    </Form.Item>

                    <Form.Item label="Modifier le Montant des Frais (Optionnel)" name="modifyFeesAmount">
                      <Input placeholder="Entrez le montant" onChange={(e) => handleChange('modifyFeesAmount', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="TKXL" name="TKXL" rules={[{ required: true }]}>
                      <Select placeholder="Sélectionnez" onChange={(value) => handleChange('TKXL', value)}>
                        <Option value="2H">2H</Option>
                        <Option value="4H">4H</Option>
                        <Option value="6H">6H</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Payer Plus Tard" name="payLater">
                      <Checkbox onChange={(e) => handleChange('payLater', e.target.checked)}>Activer</Checkbox>
                    </Form.Item>

                    <Form.Item label="Limite de Temps pour Payer Plus Tard" name="payLaterTimeLimit" rules={[{ required: true }]}>
                      <Select placeholder="Sélectionnez" onChange={(value) => handleChange('payLaterTimeLimit', value)}>
                        <Option value="24h">24H</Option>
                        <Option value="48h">48H</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Temps Minimum Avant Vol CC" name="minTimeBeforeFlightCC" rules={[{ required: true }]}>
                      <Select placeholder="Sélectionnez" onChange={(value) => handleChange('minTimeBeforeFlightCC', value)}>
                        <Option value="24h">24H</Option>
                        <Option value="48h">48H</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Temps Minimum Avant Vol Balance" name="minTimeBeforeFlightBalance" rules={[{ required: true }]}>
                      <Select placeholder="Sélectionnez" onChange={(value) => handleChange('minTimeBeforeFlightBalance', value)}>
                        <Option value="6h">6H</Option>
                        <Option value="8h">8H</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Timbre de Facture" name="stampInvoice">
                      <Checkbox onChange={(e) => handleChange('stampInvoice', e.target.checked)}>Activer</Checkbox>
                    </Form.Item>

                    <Form.Item label="Frais Supplémentaires Client Final" name="additionalClientFees">
                      <Input placeholder="Entrez les frais supplémentaires" onChange={(e) => handleChange('additionalClientFees', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Discount" name="Discount">
                      <Checkbox onChange={(e) => handleChange('discount', e.target.checked)}>Activer</Checkbox>
                    </Form.Item>

                  

                    <Form.Item>
                      <Button type="primary" htmlType="submit" loading={loading}>Enregistrer</Button>
                    </Form.Item>
                  </Form>
                </Space>
              </Space>
            </Layout>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;

