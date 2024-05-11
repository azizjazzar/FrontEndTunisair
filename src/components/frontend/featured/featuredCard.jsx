import React, { useState, useEffect } from "react";
import './featuredCard.css'; 

function FeaturedCard() {
  const [news, setNews] = useState([]);
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



  return (
    <div className="secContainer">

      <div className="destinationBox flex">
        {news.map((item, index) => (
          <div className="singleDestination" key={index}>
            <div className="destImage">
              <img src={`http://localhost:8000/${item.image}`}
                alt={item.title}
                 />
              <div className="overlayInfo" />
              <h3>{item.titre}</h3> 
            </div>
            <p className="paragraph">{item.contenu}</p>
            <button className="detailsButton">Plus de détails </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCard;
