import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-300 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:order-last">
            <div className="w-full rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.6509216184686!2d10.20263997571087!3d36.85083547223279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d1c0f0428b%3A0x55b6f2c0608987ac!2sTunisair!5e0!3m2!1sfr!2stn!4v1716318078371!5m2!1sfr!2stn"
                loading="lazy"
                style={{ width: '100%', height: '250px' }}
              ></iframe>
            </div>
          </div>
          <div>
            <div>
              <h6 className="text-white text-2xl font-bold mb-22">Bienvenue</h6>
              <p className="text-white text-1xl mb-4">
                Bienvenue sur notre site web. Découvrez ce que Tunisair a à offrir pour vous.
              </p>
            </div>
          </div>
          <div className="md:text-center">
            <div className="mb-1">
              <h6 className="text-white text-2xl font-bold mb-2">Contactez-nous</h6>
              <div className="flex justify-center items-center">
                <a href="#" className="text-white text-4xl font-bold mx-2"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white text-4xl font-bold mx-2"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white text-4xl font-bold mx-2"><i className="fab fa-google"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-2 mt-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p className="text-white text-sm">© 2021 MDBootstrap.com. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
