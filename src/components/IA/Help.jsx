import Header from '../frontend/header/header';
import React from 'react';
import "./Help.css";
const Help = () => {
  return (
    <div>
    <div className="bg-cream min-h-screen flex flex-col items-center justify-center">
      <div className="bg-blur"></div>
      <h1 className="text-7xl font-bold mb-4">
        <span className="text-gray-500">GUIDE</span> <span className="text-blue-400">D'UTILISATION</span>
      </h1>
      <p className="mb-8 text-2xl text-center">
        Découvrez comment utiliser au mieux notre assistant vocal pour une expérience utilisateur exceptionnelle et intuitive.
      </p>
      <div className="relative group">
        <div className="grid grid-cols-2 relative group  gap-8 w-full max-w-3xl">
          <div className="bg-gray-400 text-white p-5  transform group-hover:scale-105 transition duration-500 rounded-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1682310468892-5d8ade38f606?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Anna Harold"
              className="w-12 h-12 rounded-full mb-2  w-52 h-40 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <p className="font-bold"> Notre Assistant vocal est capable de répondre aux questions des utilisateurs concernant Tunisair. </p>
          </div>
          <div className="bg-yellow-100 text-black p-4 rounded-lg transform group-hover:scale-105 transition duration-500 ">
            <p className="font-bold">Notre Assistant vocal est disponible en permanence, offrant une assistance sécurisée et fiable.</p>
            <div className="flex mt-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXRib3R8ZW58MHx8MHx8fDA%3D"
                alt="Anna Harold"
                className="w-12 h-12 rounded-full"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXRib3R8ZW58MHx8MHx8fDA%3D"
                alt="Alex Silver"
                className="w-12 h-12 rounded-full mb-2  w-52 h-40 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
          <div className=" relative group bg-blue-300 text-white p-4 rounded-lg transform group-hover:scale-105 transition duration-500 ">
            <img
              src="https://plus.unsplash.com/premium_photo-1681487612246-a171d00b5e9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFwfGVufDB8fDB8fHwx"
              alt="Alex Silver"
              className="w-12 h-12 rounded-full mb-2  w-52 h-40 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <p className="font-bold">Notre Assistant vocal peut vous orienter vers votre messagerie électronique pour déposer une réclamation de manière professionnelle.</p>
          </div>
          <div className=" relative group bg-pink-300 text-white p-4  transform group-hover:scale-105 transition duration-500 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1563126365-9e06b5aabc21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Alex Silver"
              className="w-12 h-12 rounded-full mb-2  w-52 h-40 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <p className="font-bold">Notre Assistant vocal est en mesure de vous orienter vers la page d'assistance afin d'améliorer votre utilisation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Help;
