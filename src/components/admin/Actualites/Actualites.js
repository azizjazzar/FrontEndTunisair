import React, { useState, useEffect } from "react";
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";
import {  Layout, Space } from 'antd';
import Navbar from '../../../layouts/admin/Navbar';
import Sidebar from '../../../layouts/admin/Sidebar';
function Actualite() {
  const [news, setNews] = useState([]);
  const [titre, setTitre] = useState(""); // Modifier title en titre
  const [contenu, setContenu] = useState(""); // Conserver contenu
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les actualités depuis l'API Laravel
  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/actualites');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des actualités');
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation côté client
    if (!titre.trim() || !contenu.trim()) { // Modifier title en titre
      setError("Le titre et le contenu sont requis.");
      return;
    }

    const formData = new FormData();
    formData.append('titre', titre); // Modifier title en titre
    formData.append('contenu', contenu); // Conserver contenu
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:8000/api/actualites', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de l\'actualité');
      }
      const data = await response.json();
      setNews([...news, data]);
      setTitre(""); // Modifier title en titre
      setContenu(""); // Conserver contenu
      setImage(null);
      setError(null); // Réinitialiser les erreurs
    } catch (error) {
      setError(error.message);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleDeleteNews = async (id, index) => {
    try {
      const response = await fetch(`http://localhost:8000/api/actualites/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'actualité');
      }
      const updatedNews = [...news];
      updatedNews.splice(index, 1);
      setNews(updatedNews);
    } catch (error) {
      setError(error.message);
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
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gestion des Actualités</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Afficher les erreurs */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre :</label> {/* Modifier title en titre */}
          <input
            type="text"
            className="form-control"
            id="titre"
            value={titre} // Modifier title en titre
            onChange={(e) => setTitre(e.target.value)} // Modifier title en titre
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contenu" className="form-label">Contenu :</label>
          <textarea
            className="form-control"
            id="contenu"
            rows="3"
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image :</label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>

      <h2 className="mt-5">Actualités</h2>
      <div className="row mt-3">
        {news.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <MDBCol>
              <MDBCard className='h-100'>
                {item.image && (
                  <MDBCardImage
                  src={`http://localhost:8000/${item.image}`}
                    alt={item.titre} 
                    position='top'
                    style={{ width: '100%', height: '200px' }}
                  />
                )}
                <MDBCardBody>
                  <MDBCardTitle>{item.titre}</MDBCardTitle>
                  <MDBCardText>{item.contenu}</MDBCardText>
                  <MDBBtn color='danger' onClick={() => handleDeleteNews(item.id, index)}>Supprimer</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        ))}
      </div>
    </div>
    </Space>

</Layout>
</main>
</div>
</div>
</div>
  );
}

export default Actualite;





