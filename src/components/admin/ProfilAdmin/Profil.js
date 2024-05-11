import React, { useState } from "react";
import { Card, Button, Modal, Input, Row, Col } from "antd";
import { EditOutlined } from '@ant-design/icons';
import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import "../../../assets/admin/css/styles.css";

const { TextArea } = Input;

function Profile() {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    nom: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    matricule: "ABC12345"
  });

  const openEditModal = () => {
    setEditModalVisible(true);
  };

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
  };

  const handleEditModalSave = () => {
    console.log("Updated user profile:", formData);
    setEditModalVisible(false);
    // Envoyer les données mises à jour à votre backend
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 

  return (
    <>
      <div className="Master">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div id="layoutSidenav_content">
            <main  >
              <div className="profile-container" >
                <Card
                  title="Information Admin"
                  style={{ width: "70%" ,borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                >
                  <div style={{ padding: "20px" }}>
                    <p><strong>Nom:</strong> {formData.nom}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Mot de passe:</strong> {formData.password}</p>
                    <p><strong>Matricule:</strong> {formData.matricule}</p>
                  </div>
                  <div style={{ textAlign: "right", paddingRight: "20px" }}>
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      onClick={openEditModal}
                    >
                      Modifier
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="joutadmin">
                admin 
                

              </div>
             
            </main>
          </div>
        </div>
      </div>

      <Modal
        visible={editModalVisible}
        title="Modifier le profil"
        onCancel={handleEditModalCancel}
        onOk={handleEditModalSave}
      >
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <Input name="nom" value={formData.nom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <Input.Password name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="matricule">Matricule</label>
          <Input name="matricule" value={formData.matricule} onChange={handleChange} />
        </div>
      </Modal>
    </>
  );
}

export default Profile;
