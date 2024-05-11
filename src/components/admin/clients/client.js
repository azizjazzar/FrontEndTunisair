import { Table, Typography, Space, Button, Popconfirm, message, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';
import Footer from '../../../layouts/admin/Footer';

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8000/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id)); // Remove deleted user from state
      message.success('Utilisateur supprimé avec succès!');
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      message.error('Erreur lors de la suppression de l\'utilisateur!');
    }
  };

  const columns = [
    {
      title: 'ID client',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
    },
    {
      title: 'Type de client',
      dataIndex: 'client_type',
      key: 'client_type',
      fixed: 'left',
    },
    {
      title: 'Nom de l\'organisme',
      dataIndex: 'username',
      key: 'username',
      fixed: 'left',
    },
    {
      title: 'Office ID',
      dataIndex: 'officeIdQueue',
      key: 'officeIdQueue',
    },
    {
      title: 'Devise',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'Corporate Code',
      dataIndex: 'corporate_code',
      key: 'corporate_code',
    },
    {
      title: 'Code Emission',
      dataIndex: 'mission_code',
      key: 'mission_code',
    },
    {
      title: 'Matricule Fiscal',
      dataIndex: 'tax_identification_number',
      key: 'tax_identification_number',
    },
    {
      title: 'Propriétaire',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Adresse',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Numéro de téléphone 1',
      dataIndex: 'phoneNumber1',
      key: 'phoneNumber1',
    },
    {
      title: 'Numéro de téléphone 2',
      dataIndex: 'phoneNumber2',
      key: 'phoneNumber2',
    },
    {
      title: 'Fax',
      dataIndex: 'fax',
      key: 'fax',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mot de passe',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Actif',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'URL du Logo',
      dataIndex: 'logo_path',
      key: 'logo_path',
    },
    {
      title: 'Créé à',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Mise à jour',
      dataIndex: 'updated_at',
      key: 'updated_at',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_, record) => (
        <Space size="small">
          <Link to={`/admin/update/${record.id}`}><EditOutlined /></Link>
          <Popconfirm
            title="Êtes-vous sûr de vouloir supprimer cet utilisateur?"
            onConfirm={() => handleDelete(record.id)}
            okText="Oui"
            cancelText="Non"
          >
            <Button type="link" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="Master">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Space size={30} direction="vertical">
                <Typography.Title level={4}>Liste des Utilisateurs</Typography.Title>
                <Link to="/admin/addclient">
                  <Button type="primary" className="mb-2">Ajouter un utilisateur</Button>
                </Link>

                <Table
                  loading={loading}
                  columns={columns}
                  dataSource={users}
                  pagination={{ pageSize: 6 }}
                  scroll={{ x: 2000, y: 300 }}
                />
              </Space>
            </Layout>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserList;
