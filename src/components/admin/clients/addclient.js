import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select, Button, message, Layout, Space  , Typography} from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, SolutionOutlined, EnvironmentOutlined, BarcodeOutlined, FieldNumberOutlined, PhoneTwoTone, PictureOutlined } from '@ant-design/icons';
import axios from 'axios';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';

const { Option } = Select;

const AddUser = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      console.log(response.data);
      message.success('Utilisateur ajouté avec succès!');
      form.resetFields();
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données du formulaire :', error);
      message.error('Erreur lors de l\'enregistrement de l\'utilisateur ');
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
          <main  >
            <Layout style={{ padding: '0 24px 24px' }}>
              <Space size={40} direction="vertical">
                <Typography.Title level={5} style={{ textAlign: 'center' }}   > Ajouter Client</Typography.Title>

                <Link to="/admin/client">Annuler</Link>


                <Form
                  form={form}
                  onFinish={handleSubmit}
                  layout="vertical"
                  scrollToFirstError
                >
                  <Form.Item
                    name="client_type"
                    label="Type"
                    rules={[{ required: true, message: 'Veuillez sélectionner le type de client' }]}
                  >
                    <Select placeholder="Sélectionnez le type de client" suffixIcon={<UserOutlined />} >
                      <Option value="0">Corporate</Option>
                      <Option value="1">Agence A</Option>
                      <Option value="2">Agence B</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="officeId"
                    label="Office ID"
                    rules={[{ required: true, message: 'Veuillez sélectionner l\'ID du bureau' }]}
                  >
                    <Select placeholder="Sélectionnez l'ID du bureau" suffixIcon={<FieldNumberOutlined />} >
                      <Option value="tuniabta">Tunisie Agence A</Option>
                      <Option value="tuniaa">Tunisie Agence A</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="currency"
                    label="Devise"
                    rules={[{ required: true, message: 'Veuillez sélectionner la devise' }]}
                  >
                    <Select placeholder="Sélectionnez la devise" suffixIcon={<BarcodeOutlined />} >
                      <Option value="TND">TND</Option>
                      <Option value="EUR">Euro</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="corporate_code"
                    label="Corporate Code Amadeus"
                    rules={[{ required: true, message: 'Veuillez saisir le code corporate Amadeus' }]}
                  >
                    <Input prefix={<SolutionOutlined />} placeholder="Corporate Code Amadeus" />
                  </Form.Item>

                  <Form.Item
                    name="mission_code"
                    label="Code Emission"
                    rules={[{ required: true, message: 'Veuillez saisir le code emission' }]}
                  >
                    <Input prefix={<SolutionOutlined />} placeholder="Code Emission" />
                  </Form.Item>

                  <Form.Item
                    name="username"
                    label="Nom de l'Organisme"
                    rules={[{ required: true, message: 'Veuillez saisir le nom de l\'organisme' }]}
                  >
                    <Input prefix={<SolutionOutlined />} placeholder="Nom de l'Organisme" />
                  </Form.Item>

                  <Form.Item
                    name="tax_identification_number"
                    label="Matricule Fiscal"
                    rules={[{ required: true, message: 'Veuillez saisir le matricule fiscal' }]}
                  >
                    <Input prefix={<SolutionOutlined />} placeholder="Matricule Fiscal" />
                  </Form.Item>

                  <Form.Item
                    name="owner"
                    label="Propriétaire"
                    rules={[{ required: true, message: 'Veuillez saisir le propriétaire' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Propriétaire" />
                  </Form.Item>

                  <Form.Item
                    name="address"
                    label="Adresse"
                    rules={[{ required: true, message: 'Veuillez saisir l\'adresse' }]}
                  >
                    <Input prefix={<EnvironmentOutlined />} placeholder="Adresse" />
                  </Form.Item>

                  <Form.Item
                    name="phoneNumber1"
                    label="Numéro de téléphone 1"
                    rules={[{ required: true, message: 'Veuillez saisir le numéro de téléphone 1' }]}
                  >
                    <Input prefix={<PhoneOutlined />} placeholder="Numéro de téléphone 1" />
                  </Form.Item>

                  <Form.Item
                    name="phoneNumber2"
                    label="Numéro de téléphone 2"
                  >
                    <Input prefix={<PhoneTwoTone />} placeholder="Numéro de téléphone 2" />
                  </Form.Item>

                  <Form.Item
                    name="fax"
                    label="Fax"
                  >
                    <Input prefix={<PhoneTwoTone />} placeholder="Fax" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, type: 'email', message: 'Veuillez saisir une adresse email valide' }]}
                  >
                    <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="Mot de passe"
                    rules={[{ required: true, message: 'Veuillez saisir le mot de passe' }]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="Mot de passe" />
                  </Form.Item>

                  <Form.Item
                    name="state"
                    label="Actif"
                    rules={[{ required: true, message: 'Veuillez sélectionner le statut actif' }]}
                  >
                    <Select placeholder="Sélectionnez le statut actif" suffixIcon={<UserOutlined />} >
                      <Option value="1">Oui</Option>
                      <Option value="0">Non</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="logo_path"
                    label="URL du Logo"
                  >
                    <Input prefix={<PictureOutlined />} placeholder="URL du Logo" />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                      Enregistrer
                    </Button>
                  </Form.Item>

                </Form>

                <Link to="/admin/client">
                  <Button type="primary" className="mb-2">Annuler</Button>
                </Link>
              </Space>
            </Layout>
          </main>
        </div>
      </div>
    </div>

  );
};

export default AddUser;
