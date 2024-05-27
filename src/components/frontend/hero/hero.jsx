import React, { useState } from 'react';
import { FaPlane } from 'react-icons/fa';

const FlightSearch2 = () => {
  const [tariffOption, setTariffOption] = useState("");
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [departureValue, setDepartureValue] = useState("");
  const [arrivalValue, setArrivalValue] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("https://static.wixstatic.com/media/82fcd3_ea79ad7188fe4c48b08711b923056ad1~mv2.jpeg/v1/fill/w_1899,h_1134,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/82fcd3_ea79ad7188fe4c48b08711b923056ad1~mv2.jpeg");
  const [showDepartureOptions, setShowDepartureOptions] = useState(false);
  const [showArrivalOptions, setShowArrivalOptions] = useState(false);
  const [tripType, setTripType] = useState("Aller-retour");
  const [paymentType, setPaymentType] = useState("Paiement par Carte");

  const handleTariffChange = (event) => {
    setTariffOption(event.target.value);
    if (event.target.value === "Tarif selon convention signée" || event.target.value === "Tarif selon convention non signée") {
      setShowPromoCode(true);
    } else {
      setShowPromoCode(false);
    }
  };

  const handleSwapClick = () => {
    setDepartureValue("");
    setArrivalValue("");
    setDepartureDate("");
    setReturnDate("");
  };

  const handleBackgroundChange = (newBackgroundImage) => {
    setBackgroundImage(newBackgroundImage);
  };

  const cities = [
    "ALGER", "ABIDJAN", "AMMAN", "BAMAKO", "BARCELONE", "BERLIN",
    "BOLOGNE", "BORDEAUX", "BRUXELLES", "CASABLANCA", "CONAKRY",
    "CONSTANTINE", "DAKAR", "DJERBA", "DUBAI", "DUSSELDORF", "FRANCFORT",
    "GENEVE", "HAMBOURG", "ISTANBUL", "JEDDAH", "LE CAIRE", "LISBONNE",
    "LONDRES", "LYON", "MADRID", "MALTE", "MARSEILLE", "MILAN", "MITIGA",
    "MONASTIR", "MONTREAL", "MUNICH", "MEDINE", "NANTES", "NIAMEY",
    "NICE", "NOUAKCHOTT", "ORAN", "OUAGADOUGOU", "PARIS", "ROME",
    "SFAX", "STRASBOURG", "TOULOUSE", "TOZEUR", "TUNIS", "VENISE",
    "ZURICH"
  ];

  const handleFocus = (setShowOptions) => {
    setShowOptions(true);
  };

  const handleBlur = (setShowOptions) => {
    // Delay the blur event to allow click event to register
    setTimeout(() => setShowOptions(false), 200);
  };

  const handleOptionClick = (city, setValue, setShowOptions) => {
    setValue(city);
    setShowOptions(false);
  };

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      height: '70vh'
    }}>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full space-y-2">
        <div className="bg-white p-3 rounded-lg shadow-lg relative flex flex-col items-center w-full max-w-screen-xl border border-red-500" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
          <div className="absolute top-3 left-4 text-gray-600">
            <FaPlane size={40} />
          </div>

          <div className="flex flex-wrap justify-center space-x-4 mb-1 mt-">
            <div>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="tripType" className="form-radio text-blue-500 w-6 h-6" value="Aller-retour" checked={tripType === "Aller-retour"} onChange={handleTripTypeChange} />
                  <span className="ml-2">Aller-retour</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="tripType" className="form-radio text-blue-500 w-6 h-6" value="Aller-simple" checked={tripType === "Aller-simple"} onChange={handleTripTypeChange} />
                  <span className="ml-2">Aller simple</span>
                </label>
              </div>
            </div>
            <div>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentType" className="form-radio text-blue-500 w-6 h-6" value="Paiement par Balance" checked={paymentType === "Paiement par Balance"} onChange={handlePaymentTypeChange} />
                  <span className="ml-2">Paiement par Balance</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="paymentType" className="form-radio text-blue-500 w-6 h-6" value="Paiement par Carte" checked={paymentType === "Paiement par Carte"} onChange={handlePaymentTypeChange} />
                  <span className="ml-2">Paiement par Carte</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-4 w-full">
            <div className="relative flex-1">
              <select
                value={departureValue}
                onChange={(e) => setDepartureValue(e.target.value)}
                onFocus={() => handleFocus(setShowDepartureOptions)}
                onBlur={() => handleBlur(setShowDepartureOptions)}
                className="border rounded-lg p-2 flex-1 shadow-md"
                style={{ width: '260px' }}
              >
                <option value="" disabled hidden>Ou Allez-Vous</option>
                {cities.map(city => (
                  <option key={city} value={city}>
                    <FaPlane className="text-blue-500 mr-2" /> {city}
                  </option>
                ))}
              </select>
            </div>

            <button onClick={handleSwapClick} className="border rounded-lg p-2 shadow-md absolute top-12 left-80 transform translate-y-1/2 -translate-x-1/2  hover:bg-blue-400 " style={{ zIndex: '999' }}><span role="img" aria-label="swap">🔄</span></button>
            <div className="relative flex-1">
              <select
                value={arrivalValue}
                onChange={(e) => setArrivalValue(e.target.value)}
                onFocus={() => handleFocus(setShowArrivalOptions)}
                onBlur={() => handleBlur(setShowArrivalOptions)}
                className="border rounded-lg p-2 flex-1 shadow-md"
                style={{ width: '250px' }}
              >
                <option value="" disabled hidden>D'ou partez-Vous</option>
                {cities.map(city => (
                  <option key={city} value={city}>
                    <FaPlane className="text-blue-500 mr-2" /> {city}
                  </option>
                ))}
              </select>
            </div>

            <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} placeholder="Départ le" className="border rounded-lg p-2 shadow-md" title="Départ le" />
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} placeholder="Retour le" className="border rounded-lg p-2 shadow-md" title="Retour le" />
            <select className="border rounded-lg p-2 shadow-md" title="Type de passager">
              <option value="" disabled hidden>Type de passager</option>
              <option value="adulte">Adulte</option>
              <option value="enfant">Enfant</option>
              <option value="bébé">Bébé</option>
            </select>
          </div>
          <div className="flex space-x-4 mt-4 w-full">
            <label className="flex-1">
              <span>Mode de Tarification</span>
              <select onChange={handleTariffChange} value={tariffOption} className="border rounded-lg p-2 w-full shadow-md">
                <option value="Tarif selon convention signée">Tarif selon convention signée</option>
                <option value="Tarif selon convention non signée">Tarif selon convention non signée</option>
              </select>
            </label>
            <label className="flex-1">
              <span>Code promo</span>
              <input type="text" placeholder="Code promo" className="border rounded-lg p-2 w-full shadow-md" />
            </label>
          </div>
          <div className="flex space-x-4 mt-3 w-full relative">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg shadow-md text-white p-2 flex-1 absolute right-7 top-0" style={{ width: '200px', marginRight: '20px' }}>Rechercher des vols</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlightSearch2;
