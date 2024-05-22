import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import "./featured.css";
import FeaturedCard from "./featuredCard";
import GoogleMapReact from 'google-map-react';

const Featured = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true); // Définit showElements sur true une fois que le composant est monté
  }, []);

  return (
    <>
      
      <div className={`first ${showElements ? 'show' : ''}`}>
        <h1 className="  absolute inset-x-1 top-1/2 text-center  text-5xl font-serif font-bold ">
          <span className="text-black font-bold text-7xl">VOIR</span> | <span className="text-black font-bold text-7xl">DÉCOUVRIR</span> <br />
          <span className="text-black font-bold text-7xl">VIVRE</span> | <span className="text-black font-bold text-7xl">S'ÉVADER</span>
        </h1>
      </div>

      <div className={` eff flex flex-col items-start space-y-2 mx-8 my-1 ${showElements ? 'show' : ''}`}>
        <div className="flex items-start space-x-4">
          <span className="text-4xl font-bold text-gray-600">01</span>
          <div>
            <h3 className="text-6xl font-semibold text-gray-800">Choisissez votre destination</h3>
            <p className="text-white">Paragraphe.hgfdfd Cliquez ici pour le modifier.Utilisez-le pour vous présenter à vos visiteurs. Paragraphe. Cliquez ici pour le modifier. Utilisez-le pour vous présenter à vos visiteurs.. Utilisez-le pour vous présenter à vos visiteurs.</p>
          </div>
        </div>
      </div>

      <div className={` efft flex flex-col items-start space-y-2 mx-8 my-1 ${showElements ? 'show' : ''}`}>
        <div className="flex items-start space-x-4">
          <span className="text-4xl font-bold text-gray-600">02</span>
          <div>
            <h3 className="text-6xl font-semibold text-gray-800">Complétez le formulaire</h3>
            <p className="text-white">Paragraphe.hgfdfd Cliquez ici pour le modifier.Utilisez-le pour vous présenter à vos visiteurs. Paragraphe. Cliquez ici pour le modifier. Utilisez-le pour vous présenter à vos visiteurs.. Utilisez-le pour vous présenter à vos visiteurs.</p>
          </div>
        </div>
      </div>

      <div className={` effo flex flex-col items-start space-y-2 mx-8 my-1 ${showElements ? 'show' : ''}`}>
        <div className="flex items-start space-x-4">
          <span className="text-4xl font-bold text-gray-600">03</span>
          <div>
            <h3 className="text-6xl font-semibold text-gray-800">Appréciez nos offres !</h3>
            <p className="text-white">Paragraphe.hgfdfd Cliquez ici pour le modifier.Utilisez-le pour vous présenter à vos visiteurs. Paragraphe. Cliquez ici pour le modifier. Utilisez-le pour vous présenter à vos visiteurs.. Utilisez-le pour vous présenter à vos visiteurs.</p>
          </div>
        </div>
      </div>

      <div className="photos"> 
        <img className="photo" src="https://static.wixstatic.com/media/82fcd3_01112a43a6e84c6db5f76aac9fe21d23~mv2.jpg/v1/crop/x_426,y_0,w_2701,h_4193/fill/w_555,h_861,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1130968613.jpg" alt="photo"></img>
        <img className="sous-photo" src="https://static.wixstatic.com/media/82fcd3_f63b38f3160f4fa486d48644d4800f97~mv2.jpg/v1/fill/w_379,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_201980108.jpg" alt="sous-photo"></img>
      </div>

      <div className="map">


      <div class="icon-container">
  <h1 class="siege">
    <span class="circle-icon">&#8226;</span>
    NOTRE SIEGE SOCIAL
  </h1>
</div>



        
        <div className="w-full rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.6509216184686!2d10.20263997571087!3d36.85083547223279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d1c0f0428b%3A0x55b6f2c0608987ac!2sTunisair!5e0!3m2!1sfr!2stn!4v1716318078371!5m2!1sfr!2stn"
            loading="lazy"
            style={{ width: '100%', height: '430px' }}
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Featured;
