import React from 'react';
import './pourqoui.css';

function Pourqoui() {

    return (
        <div className="bg-white min-h-screen flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-14">GUIDE <span className="text-teal-500">POUR-VOUS</span></h1>
        <div className="flex mt-12 space-x-8">
          <div className="relative group">
            <img
                src="https://plus.unsplash.com/premium_photo-1682310468892-5d8ade38f606?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 1"
              className="w-52 h-96 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative group">
            <img
src="https://plus.unsplash.com/premium_photo-1661410847282-d6af31c576a9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"                alt="Image 2"
              className="w-52 h-96 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative group">
            <img
                src="https://media.istockphoto.com/id/1545005484/photo/pink-pastel-colored-cubes-podium-pedestal-for-product-background-on-empty-pink-background-3d.jpg?s=612x612&w=0&k=20&c=WT0ryeQgh6Dv7_8zyFzuSWsTdEx1vEGeag2zirNa1_0="
                alt="Image 3"
              className="w-52 h-96 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative group">
            <img
src="https://plus.unsplash.com/premium_photo-1683133924436-a7afbdf8cd25?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"                alt="Image 4"
              className="w-52 h-96 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    
           
    );
}

export default Pourqoui;

