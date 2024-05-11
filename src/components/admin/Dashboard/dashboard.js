import React, { useState, useEffect } from "react";
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from "../../../layouts/admin/Sidebar";
import Footer from "../../../layouts/admin/Footer";
import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography, Layout, Row, Col } from "antd";
import axios from 'axios';
import { Line, Pie } from 'react-chartjs-2';
import moment from 'moment'; // Import de la bibliothèque moment.js

function Dashboard() {
    const [orders, setOrders] = useState(0);
    const [inventory, setInventory] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [transactionData, setTransactionData] = useState([]);
    const [currentTime, setCurrentTime] = useState(''); // État pour stocker la date et l'heure actuelles

    // Fonction pour obtenir la date et l'heure actuelles
    const getCurrentTime = () => {
        const now = moment().format('MMMM Do YYYY, h:mm:ss a');
        setCurrentTime(now);
    };

    // Mock API calls (replace with actual API calls)
    useEffect(() => {
        // Mock data
        const ordersData = 54666;
        const inventoryData = 5555;
        const revenueData = 7777;

        setOrders(ordersData);
        setInventory(inventoryData);
        setRevenue(revenueData);

        // Fetching transaction data
        axios.get('http://localhost:8000/api/comptealimentation')
            .then(response => {
                setTransactionData(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de transaction :', error);
            });

        // Fetching user count
        axios.post('http://localhost:8000/api/users/count')
            .then(response => {
                setUserCount(response.data.count);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du nombre d\'utilisateurs :', error);
            });

        // Obtenir la date et l'heure actuelles lors du chargement initial
        getCurrentTime();

        // Mettre à jour la date et l'heure actuelles chaque seconde
        const interval = setInterval(getCurrentTime, 1000);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);
    }, []);

    // Traitement des données pour le graphique en ligne et le pie chart
    const labels = transactionData.map(transaction => transaction.date);
    const debitData = transactionData.map(transaction => transaction.debit);
    const creditData = transactionData.map(transaction => transaction.credit);
    const pieChartData = {
        labels: ['Débits', 'Crédits'],
        datasets: [
            {
                data: [calculateTotal(debitData), calculateTotal(creditData)],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            },
        ],
    };

    const lineChartData = {
        labels: labels,
        datasets: [
            {
                label: 'Débits',
                data: debitData,
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            },
            {
                label: 'Crédits',
                data: creditData,
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }
        ]
    };

    return (
        <div className="Master">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main style={{ padding: '0 24px ' }}>
                        <Typography.Title level={10}></Typography.Title>
                       
                        <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} lg={6}>
                                <DashboardCard
                                    icon={
                                        <UserOutlined
                                            style={{
                                                color: "purple",
                                                backgroundColor: "rgba(0,255,255,0.25)",
                                                borderRadius: 20,
                                                fontSize: 24,
                                                padding: 8,
                                            }}
                                        />
                                    }
                                    title={"Customer"}
                                    value={userCount}
                                />
                            </Col>
                            <Col xs={24} sm={12} lg={6}>
                                <DashboardCard
                                    icon={<ShoppingCartOutlined style={{ color: "green" }} />}
                                    title={"Orders"}
                                    value={orders}
                                />
                            </Col>
                            <Col xs={24} sm={12} lg={6}>
                                <DashboardCard
                                    icon={<ShoppingOutlined style={{ color: "blue" }} />}
                                    title={"Rèclamation"}
                                    value={inventory}
                                />
                            </Col>
                           
                            <Col xs={24} sm={12} lg={6}>
                            <Card  style={{ background: '#AEC4CB'  ,fontSize: 19,
                                                padding: 8}}>
                            <Space >
                                <Typography.Text>Today's Date and Time:</Typography.Text>
                                <Typography.Text>{currentTime}</Typography.Text>
                            </Space>
                        </Card>
                            </Col>
                        </Row>
                        
                        <Row gutter={[16, 16]}>
                            <Col xs={24} lg={12}>
                                <DashboardChart lineChartData={lineChartData}/>
                            </Col>
                            <Col xs={24} lg={12}>
                                <DashboardPie/>
                            </Col>
                        </Row>
                       
                      
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
}

function DashboardChart({ lineChartData }) {
    return (
        <div>
            <h2>Les Mouvements Financièrs</h2>
            <Line data={lineChartData} />
        </div>
    );
}

function DashboardPie() {
    const pieChartData = {
        labels: ['Débits', 'Crédits'],
        datasets: [
            {
                data: [3000, 5000],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            },
        ],
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <h2 style={{ textAlign: 'center' }}>Type Des Clients</h2>
            <Pie data={pieChartData} />
        </div>
    );
}

function calculateTotal(data) {
    return data.reduce((acc, curr) => acc + curr, 0);
}

export default Dashboard;
