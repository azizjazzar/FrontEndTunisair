import React, { useState, useEffect } from 'react';
import { Table, Button, Typography, Space,Layout} from 'antd'; // Import des composants d'Ant Design
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';
import Footer from '../../../layouts/admin/Footer';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Import des icônes Ant Design

const ContractList = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/contracts');
      setContracts(response.data);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/contracts/${id}`);
      fetchContracts(); // Re-fetch contracts after deletion to update the list
      console.log('Contrat deleted successfully');
    } catch (error) {
      console.error('Error deleting contrat:', error);
    }
  };

  const columns = [
    {
      title: 'ID Contrat',
      dataIndex: 'id',
      key: 'id',
      
    },
    {
      title: 'Client Type',
      dataIndex: 'clientType',
      key: 'clientType',
    },
    {
      title: 'List',
      dataIndex: 'List',
      key: 'List',
    },
    {
      title: 'Libelle',
      dataIndex: 'Libelle',
      key: 'Libelle',
    },
    {
      title: 'Contract Start Date',
      dataIndex: 'contractStartDate',
      key: 'contractStartDate',
    },
    {
      title: 'Contract End Date',
      dataIndex: 'contractEndDate',
      key: 'contractEndDate',
    },
    {
      title: 'Minimum Guaranteed',
      dataIndex: 'minimumGuaranteed',
      key: 'minimumGuaranteed',
    },
    {
      title: 'Travel Start Date',
      dataIndex: 'travelStartDate',
      key: 'travelStartDate',
    },
    {
      title: 'Travel End Date',
      dataIndex: 'travelEndDate',
      key: 'travelEndDate',
    },
    {
      title: 'Is Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => (isActive ? 'Oui' : 'Non'),
    },
    {
      title: 'Activate Internet Fees',
      dataIndex: 'activateInternetFees',
      key: 'activateInternetFees',
      render: (activateInternetFees) => (activateInternetFees ? 'Oui' : 'Non'),
    },
    {
      title: 'Modify Fees Amount',
      dataIndex: 'modifyFeesAmount',
      key: 'modifyFeesAmount',
    },
    {
      title: 'TKXL',
      dataIndex: 'TKXL',
      key: 'TKXL',
    },
    {
      title: 'Pay Later',
      dataIndex: 'payLater',
      key: 'payLater',
      render: (payLater) => (payLater ? 'Oui' : 'Non'),
    },
    {
      title: 'Pay Later Time Limit',
      dataIndex: 'payLaterTimeLimit',
      key: 'payLaterTimeLimit',
    },
    {
      title: 'Min Time Before Flight CC',
      dataIndex: 'minTimeBeforeFlightCC',
      key: 'minTimeBeforeFlightCC',
    },
    {
      title: 'Min Time Before Flight Balance',
      dataIndex: 'minTimeBeforeFlightBalance',
      key: 'minTimeBeforeFlightBalance',
    },
    {
      title: 'Stamp Invoice',
      dataIndex: 'stampInvoice',
      key: 'stampInvoice',
      render: (stampInvoice) => (stampInvoice ? 'Oui' : 'Non'),
    },
    {
      title: 'Additional Client Fees',
      dataIndex: 'additionalClientFees',
      key: 'additionalClientFees',
    },
    {
      title: 'Discount',
      dataIndex: 'Discount',
      key: 'Discount',
      render: (Discount) => (Discount ? 'Oui' : 'Non'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
      
          <Space size="small">
          <Link to={`/admin/updatecontract/${record.id}`} >
            <EditOutlined />
          </Link>
          <Button type="danger" onClick={() => handleDelete(record.id)}>
            <DeleteOutlined />
          </Button>
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
            <Typography.Title level={4}>Liste des Contrats</Typography.Title>

              <Link to="/admin/contract" className="ant-btn ant-btn-success mb-2">
                Ajouter un contrat
              </Link>

              <Table columns={columns} dataSource={contracts} 
               pagination={{
                pageSize: 6,}}
                scroll={{ x: 3000, y: 300 }}
              />
            </Space>
            </Layout>
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContractList;


