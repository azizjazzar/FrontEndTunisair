import Header from '../frontend/header/header';
import React from 'react';

function Help() {
    return (
        <div style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#FAEBD7", // Couleur de secours au cas où l'image ne se charge pas ou pour les appareils à faible résolution
        }}>
            <Header />            
            <div className='text-center relative'>
                <h1 className='pb-5'></h1>
                <h2 className="text-3xl font-bold mt-10 mb-8 text-blue-700 transition-colors ">Pour mieux apprendre notre assistant vocal, nous vous présentons ce guide d'utilisation</h2>
                <div className="max-w-screen-lg mx-auto flex justify-between">
                    <div className="w-1/2">
                        <div className="max-w-xs bg-blue-400 p-10 rounded-lg mb-4 mr-4 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                            <p>Pour lancer l'assistant vocal, dites simplement "Bonjour".</p>
                        </div>
                        <div className="max-w-xs bg-blue-300 p-11 rounded-lg mb-4 mr-4 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                            <p>Accédez à la page d'aide en prononçant "Aide".</p>
                        </div>
                        <div className="max-w-xs bg-blue-200 p-8 rounded-lg mb-4 mr-4 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                            <p>Si vous souhaitez en savoir plus sur notre agence, demandez "Qui êtes-vous ?"</p>
                        </div>
                        <div className="max-w-xs bg-blue-100 p-4 rounded-lg mb-4 mr-4 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                            <p>Pour accéder à la fonctionnalité d'envoi de mail, dites "je veux envoyer un mail".</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                    <img className="max-w-full h-auto" src="https://images.pexels.com/photos/4825709/pexels-photo-4825709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' /> {/* Remplacez max-w-xs par max-w-full */}
                        {/* Ici, nous avons retiré la balise img, car l'image de fond sera désormais utilisée en arrière-plan */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
