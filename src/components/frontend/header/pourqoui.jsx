import React from 'react';

function ComplaintPage() {
  return (
    <div className="flex justify-center items-center h-screen">
<div className="w-full max-w-screen-xl mx-auto p-8 rounded-lg shadow-lg bg-blue-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Votre réclamation, Notre priorité</h1>
          <p className="text-xl text-gray-700">Nous vous assistons avec professionnalisme</p>
        </div>
        <div className="flex flex-col justify-center md:flex-row">
         
          <div className="w-full md:w-1/2 md:pl-4">
            {/* Formulaire de réclamation */}
            <form className="bg-white bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Nom
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Nom" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Objet
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Objet" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintPage;
