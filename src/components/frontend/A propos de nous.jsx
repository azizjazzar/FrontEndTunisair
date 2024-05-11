import Header from '../frontend/header/header';
import React from 'react';
import './A propos de nous.css';
function aproposdenous() {
    return (
        <div>
            <Header></Header>
            <div className="relative">
                <img src="https://static.wixstatic.com/media/82fcd3_ea79ad7188fe4c48b08711b923056ad1~mv2.jpeg/v1/fill/w_1891,h_1260,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/82fcd3_ea79ad7188fe4c48b08711b923056ad1~mv2.jpeg" alt="Logo" />
                <h1 className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center text-white-500 text-5xl font-serif font-bold bg-white-800 bg-opacity-0">
                    <span className="text-white font-bold text-6xl">VOIR</span> | <span className="text-white font-bold text-6xl">DÉCOUVRIR</span> <br />
                    <span className="text-white font-bold text-6xl">VIVRE</span> | <span className="text-white font-bold text-6xl">S'ÉVADER</span>
                </h1>

            </div>
            <p class="custom-paragraph">A PROPOS DE NOUS </p>

            <div className="container">
                <div className="description-box">
                    <h3 className="">PRESENTATION</h3>      <p className="hidden">


                        Tunisair, fondée en 1948, forte de plus de 75 ans d'expérience dans le secteur de l'aviation, est la compagnie aérienne nationale de la Tunisie.Première compagnie aérienne en Tunisie, première entre l'Europe et la Tunisie, Tunisair propose des vols vers plus de 50 destinations dans le monde entier, en Afrique, en Europe, en Asie et en Amérique du Nord.Tunisair est une compagnie aérienne innovante, proche de ses clients et fière de son riche héritage. Avec son engagement en faveur de la qualité, de la durabilité et de la satisfaction client, Tunisair continue de proposer une expérience de voyage exceptionnelle à ses passagers. Choisir Tunisair, c'est choisir un voyage sécurisé, confortable et respectueux de l'environnement.</p>
                </div>


                <div className="description-box2">
                    <h3 className="">NOS VALEURS</h3>      <p className="hidden">
                        Notre agence de voyage s'engage à offrir une expérience exceptionnelle à chaque voyage. Nous sommes reconnus pour notre rapport qualité-prix, notre sécurité et notre service client. Notre équipe expérimentée vous propose les meilleures offres et les itinéraires les plus sûrs, pour voyager en toute tranquillité. Que vous cherchiez des vacances en famille, une escapade romantique ou une aventure, nous avons ce qu'il vous faut. Attendez-vous à des voyages mémorables et une satisfaction garantie à chaque étape. Faites-nous confiance pour vous guider vers des destinations extraordinaires ou plus .      </p>
                </div>
            </div>




            {/* Ajoutez ici d'autres informations d'aide */}


        </div>
    );
}

export default aproposdenous;
