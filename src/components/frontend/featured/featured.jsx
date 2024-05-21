import React from "react";
import Heading from "../Heading";
import "./featured.css";
import FeaturedCard from "./featuredCard";
import GoogleMapReact from 'google-map-react';


const Featured = () => {
  return (
    <>
      <p class="titre">QUI-SOMMES NOUS ?  </p>
      <h2 class="sous"> Découvre notre essence, concrétise tes rêves!
      </h2>

    

  <div className="text-container">

    <p className="paragraph"> Tunisair est la compagnie aérienne nationale de la Tunisie, opérant depuis sa création en 1948. <br />Elle est reconnue pour son rôle crucial dans la connectivité aérienne du pays, desservant à la fois des destinations nationales et internationales.<br /> Fondée avec pour objectif de promouvoir le tourisme et le développement économique du pays. </p>
  </div>


<div> 
<img className="photo" src="https://static.wixstatic.com/media/82fcd3_01112a43a6e84c6db5f76aac9fe21d23~mv2.jpg/v1/crop/x_426,y_0,w_2701,h_4193/fill/w_555,h_861,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1130968613.jpg"></img>
<img className="sous-photo" src="https://static.wixstatic.com/media/82fcd3_f63b38f3160f4fa486d48644d4800f97~mv2.jpg/v1/fill/w_379,h_379,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_201980108.jpg"></img>
</div>

      <div className="map">
<p class="siege" >Notre siége social </p>
      <div className="w-full rounded-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.6509216184686!2d10.20263997571087!3d36.85083547223279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d1c0f0428b%3A0x55b6f2c0608987ac!2sTunisair!5e0!3m2!1sfr!2stn!4v1716318078371!5m2!1sfr!2stn"
        loading="lazy"
        style={{ width: '100%', height: '450px' }}
      ></iframe>
    </div>

      </div>




    </>
  );
};

export default Featured;
