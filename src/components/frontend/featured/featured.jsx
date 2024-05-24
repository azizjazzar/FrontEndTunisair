import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import "./featured.css";
import FeaturedCard from "./featuredCard";
import GoogleMapReact from 'google-map-react';
import Footer from "../Pages/footer";

const Featured = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true); 
  }, []);

  return (
    <>
      
      <div className={`first ${showElements ? 'show' : ''}`}>
        <h1 className="  absolute inset-x-1 top-1/2 text-center  text-5xl font-serif font-bold ">
        <span className="text-blue-300 font-bold text-7xl">VOIR</span> | 
<span className="text-orange-300 font-bold text-7xl">DÉCOUVRIR</span> <br />
<span className="text-green-300 font-bold text-7xl">VIVRE</span> | 
<span className="text-pink-200 font-bold text-7xl">S'ÉVADER</span>
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

      <div className="all">
  <section
    className="relative flex items-center justify-center h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('https://static.wixstatic.com/media/61d2a968c438494ba63caed4fb9465dd.jpg/v1/fill/w_1899,h_768,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/61d2a968c438494ba63caed4fb9465dd.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-blue-500 opacity-40"></div>
    <div className="relative z-10 text-center text-white">
    <h1 className="text-5xl mb-4 text-lightBlue-100">Bienvenue</h1>
      <p className="text-2xl mb-11 italic text-justify font-thin ">
        Découvrez nos valeurs fondamentales qui guident notre excellence de service et notre engagement envers vous.
      </p>
      <div className="flex justify-center space-x-8">
        <div className="bg-white text-lightBlue-800 p-6  shadow-lg w-64">
          <h2 className="text-3xl  font-thin text-blue-400 font-semibold mb-4">Sécurité</h2>
          <p className="mb-4 text-black italic text-justify font-thin">
          Chez Tunisair, la sécurité est notre priorité absolue. Nous respectons les normes strictes pour assurer un voyage sécurisé à tous nos passagers.          </p>
          <p className="mb-4 italic text-black text-justify font-thin">Nous mettons en œuvre des mesures de sécurité rigoureuses pour garantir la sûreté de nos vols.</p>
          <hr className="border-t-8 border-blue-700 mt-4 mx-auto w-10"></hr>

        </div>
        <div className="bg-white text-black p-6  shadow-lg w-64">
          <h2 className="text-3xl  font-thin text-blue-400 font-semibold mb-4">Service Client</h2>
          <p className="mb-4 italic text-justify font-thin">
            Notre équipe dédiée s'engage à fournir un service exceptionnel et efficase , garantissant une expérience agréable  et mémorable.
          </p>
          <p className="mb-4 italic text-justify font-thin">

Notre objectif est de vous offrir un service personnalisé qui répond à tous vos besoins et dépasse vos attentes.</p>

<hr className="border-t-8 border-blue-700 mt-4 mx-auto w-10"></hr>

        </div>
        <div className="bg-white  text-blue-300 text-black p-6  shadow-lg w-64">
          <h2 className="text-3xl  font-thin text-blue-400 font-semibold mb-4">Innovation</h2>
          <p className="mb-4 italic text-justify font-thin">
            Nous innovons en continu pour améliorer nos services et vous offrir la meilleure expérience de voyage avec des commodités modernes.
          </p>
          <p className="mb-4 italic text-justify font-thin">Nous investissons dans de nouvelles technologies pour rendre votre voyage plus confortable et pratique.</p>
          <hr className="border-t-8 border-blue-700 mt-4 mx-auto w-10"></hr>

        </div>
      </div>
    </div>
  </section>
</div>



      <Footer />

    </>
  );
};
 
export default Featured;
