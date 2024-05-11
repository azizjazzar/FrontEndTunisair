import React, { useState } from 'react';
import { Card, Button, Modal, Input, Row, Col} from 'antd'; // Import Ant Design components
import Header from "../header/header";
import undrawImage from '../../../assets/frontend/undraw_personal1.png'; 
import Heading from "../Heading";

const { TextArea } = Input;

function UserProfile() {
    const [fullName, setFullName] = useState('Johnatan Smith');
    const [email, setEmail] = useState('example@example.com');
    const [phone, setPhone] = useState('(097) 234-5678');
    const [mobile, setMobile] = useState('(098) 765-4321');
    const [address, setAddress] = useState('Bay Area, San Francisco, CA');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        mobile: '',
        address: '',
    });

    const openModal = () => {
        setFormData({
            fullName,
            email,
            phone,
            mobile,
            address,
        });
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEdit = () => {
        setFullName(formData.fullName);
        setEmail(formData.email);
        setPhone(formData.phone);
        setMobile(formData.mobile);
        setAddress(formData.address);
        closeModal();
    };

    return (
        <>
            <Header />
            <section style={{ backgroundColor: '#f0f2f5', padding: '20px' }}>
                <div>
                    <Heading title='Information User' />
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                        <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <div style={{ padding: '20px' }}>
                        <p><strong>Full Name:</strong> {fullName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone:</strong> {phone}</p>
                        <p><strong>Mobile:</strong> {mobile}</p>
                        <p><strong>Address:</strong> {address}</p>
                        <p><strong>Full Name:</strong> {fullName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone:</strong> {phone}</p>
                        <p><strong>Mobile:</strong> {mobile}</p>
                        <p><strong>Address:</strong> {address}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <button type="primary" onClick={openModal}>Edit</button>
                        
                    </div>
                </Card>
                        </Col>
                        <Col span={12}>
                            <img src={undrawImage} alt="Illustration" style={{ width: '100%', height: 'auto' }} />
                        </Col>
                    </Row>
                </div>

                <Modal
                    title="Edit Profile"
                    visible={modalIsOpen}
                    onCancel={closeModal}
                    footer={[
                        <Button key="cancel" onClick={closeModal}>Cancel</Button>,
                        <Button key="submit" type="primary" onClick={handleEdit}>Save</Button>,
                    ]}
                >
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <Input name="fullName" value={formData.fullName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <Input name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <Input name="mobile" value={formData.mobile} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <TextArea rows={3} name="address" value={formData.address} onChange={handleChange} />
                    </div>
                </Modal>
            </section>

            <section style={{ backgroundColor: '#ffffff' }}>
            <div className="container py-5"  >
                <Heading title='Information Contrat' />
                <Card  style={{ backgroundColor: '#f0f2f5', marginRight:'20%', marginLeft:'20%' }} >
               
                        <p><strong>Type de client:</strong> hhhhhhhhhh</p>
                        <p><strong>Liste:</strong> fhfhh</p>
                        <p><strong>Libellé:</strong> gfgfgf</p>
                        <p><strong>Date Contrat Début:</strong> </p>
                        <p><strong>Date Contrat Fin:</strong></p>
                        <p><strong>Minimum Garanti:</strong></p>
                        <p><strong>Date de Voyage Début:</strong> </p>
                        <p><strong>Date de Voyage Fin:</strong> </p>
                        <p><strong>Actif:</strong> </p>
                        <p><strong>Activer les Frais Internet:</strong> </p>
                        <p><strong>Modifier le Montant des Frais (Optionnel):</strong> </p>
                        <p><strong>TKXL:</strong> </p>
                        <p><strong>Payer Plus Tard:</strong> </p>
                        <p><strong>Limite de Temps pour Payer Plus Tard:</strong> </p>
                        <p><strong>Temps Minimum Avant Vol CC:</strong></p>
                        <p><strong>Temps Minimum Avant Vol Balance:</strong> </p>
                        <p><strong>Timbre de Facture:</strong> </p>
                        <p><strong>Frais Supplémentaires Client Final:</strong></p>
                        <p><strong>Discount:</strong> </p>
                </Card>
            
                </div>
            </section>
        </>
    );
}

export default UserProfile;
