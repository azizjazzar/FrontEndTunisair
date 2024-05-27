import React from 'react';
import { HiUserCircle } from 'react-icons/hi'; // Importer l'icône de profil depuis HeroIcons
import './header.css';

function Header() {
  const backgroundImageUrl = 'https://static.wixstatic.com/media/82fcd3_ea79ad7188fe4c48b08711b923056ad1~mv2.jpeg/v1/fill/w_1899,h_1134,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/82fcd3_ea79ad7188fe4c48b08711b923056ad1~mv2.jpeg';

  return (
    <nav className="bg-transparent relative">
      <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImageUrl})`, filter: 'blur(10px)' }}></div>
      <div className="max-w-7xl mx-auto px-4 bg-transparent relative z-10">
        <div className="flex justify-between h-20 bg-transparent">
          <div className="flex items-center"></div>
          <div className="hidden md:block bg-transparent">
            <div className="ml-10 font-bold text-1xl flex space-x-4">
              <a href="#" className="nav-link">Accueil</a>
              <a href="#" className="nav-link">Réservation</a>
              <a href="#" className="nav-link">Mouvements</a>
              <a href="#" className="nav-link">Aide | Guide</a>
            </div>
          </div>
          <div className="hidden md:block">
            <HiUserCircle className="h-9 w-9 text-black hover:bg-gray-100 hover:text-white rounded-md" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
