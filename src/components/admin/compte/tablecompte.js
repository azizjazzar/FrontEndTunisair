import React, { useState, useEffect } from 'react';
import { Table, Space,  Typography , Layout} from 'antd';
//import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';

function CompteTable() {
  const [comptes, setComptes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/comptealimentation')
      .then(response => response.json())
      .then(data => setComptes(data))
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Solde',
      dataIndex: 'solde',
      key: 'solde',
    },
    {
      title: 'Numéro de Bulletin',
      dataIndex: 'num_bulletin',
      key: 'num_bulletin',
    },
    {
      title: 'Date de Bulletin',
      dataIndex: 'date_bulletin',
      key: 'date_bulletin',
    },
    {
      title: 'Débit',
      dataIndex: 'debit',
      key: 'debit',
    },
    {
      title: 'Crédit',
      dataIndex: 'credit',
      key: 'credit',
    },
    {
      title: 'Date de mouvements',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    
  ];

  return (
    <>
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
           
           
      <Typography.Title level={4} style={{ textAlign: 'center' }}>Gestion Des Mouvements</Typography.Title>
      <Table dataSource={comptes} columns={columns} rowKey="id" />
      </Space>
      </Layout>
      </main>
      </div>
      </div>
      </div>
    </>
  );
}

export default CompteTable;

