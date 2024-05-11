import Header from '../frontend/header/header';
import React from 'react';

function Help() {
    return (
        <div>
            <Header />
            <div className='text-center relative'>
                <h1 className='pb-5'>Page d'aide</h1>
                <p>Pour mieux appréhender notre assistant vocal "Alex", nous vous présentons ce guide d'utilisation :</p>
                <div className="max-w-screen-lg mx-auto">
                    {/*<img className="max-w-full h-auto" src="https://images.pexels.com/photos/14436285/pexels-photo-14436285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />*/}
                    <div className="flex justify-center">
                        <div className="flex justify-between">
                            <div className="max-w-xs bg-gray-200 p-10 rounded-lg mb-4 mr-4 w-64 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                                <p>Pour lancer l'assistant vocal, dites simplement "Bonjour".</p>
                            </div>
                            <div className="max-w-xs bg-gray-200 p-11 rounded-lg mb-4 mr-4 w-64 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                                <p>Accédez à la page d'aide en prononçant "Aide".</p>
                            </div>
                            <div className="max-w-xs bg-gray-200 p-8 rounded-lg mb-4 mr-4 w-64 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                                <p>Si vous souhaitez en savoir plus sur notre agence, demandez "Qui êtes-vous ?"</p>
                            </div>
                            <div className="max-w-xs bg-gray-200 p-4 rounded-lg mb-4 w-64 hover:translate-y-2 hover:shadow-md transition-transform duration-300">
                                <p>Pour accéder à la fonctionnalité d'envoi de mail, dites "je veux envoyer un mail".</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
