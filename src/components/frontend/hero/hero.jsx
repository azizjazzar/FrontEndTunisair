import React, { useState, useEffect } from 'react';
import { Form, Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import { DatePicker } from 'antd'; // Assurez-vous d'importer DatePicker depuis antd
import './hero.css';

const { option } = Form; // Utilisez Form.option au lieu de Select.option

const Hero = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengerType, setPassengerType] = useState('adulte');
  const [pricingMode, setPricingMode] = useState('convention-signee');
  const [tripType, setTripType] = useState('aller-retour');
  const [paymentMethod, setPaymentMethod] = useState('balance');
  const [promoCode, setPromoCode] = useState('');
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    "https://images.unsplash.com/photo-1608023136037-626dad6c6188?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1661952798931-14d398307ee2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1487253031786-9989fcd7bb73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculer le nouvel index d'image
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
    }, 4000); // Changer d'image toutes les 3 secondes

    // Nettoyer l'intervalle lorsque le composant se démonte
    return () => clearInterval(intervalId);
  }, []); // Le tableau vide [] indique que cet effet ne s'exécutera qu'une fois après le montage initial

  const handleSubmit = (values) => {
    console.log('Valeurs du formulaire:', values);
  };

  return (
    <section className="hero bg-transparent min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
      <div className="pc-tab ">
        <Row>
          <div className="pc-tab">
            <input checked="checked" id="tab1" type="radio" name="pct" />
            <input id="tab2" type="radio" name="pct" />
            <input id="tab3" type="radio" name="pct" />
            <nav></nav>
            <section>
              <div className="tab1">
                <div className="container py-1 custom-container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', padding: '7px', border: '2px solid #ddd', borderRadius: '15px', backdropFilter: 'blur(5px)' }}>
                  <Form name="flightReservationForm" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Où Allez-vous</Form.Label>
                          <FormControl
                            type="text"
                            placeholder="Ville de destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>D'où partez-vous</Form.Label>
                          <FormControl
                            type="text"
                            placeholder="Ville de départ"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={2}>
                        <Form.Group>
                          <Form.Label>Type de passager</Form.Label>
                          <Form.Control
                            as="select"
                            style={{ width: '100%' }}
                            value={passengerType}
                            onChange={(e) => setPassengerType(e.target.value)}
                            className="custom-select"
                          >
                            <option value="adulte">Adulte</option>
                            <option value="enfant">Enfant</option>
                            <option value="bebe">Bébé</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Mode de tarification</Form.Label>
                          <Form.Control
                            as="select"
                            style={{ width: '100%' }}
                            value={pricingMode}
                            onChange={(e) => setPricingMode(e.target.value)}
                            className="custom-select"
                          >
                            <option value="convention-signee">Tarif selon la convention signée</option>
                            <option value="convention-non-signee">Tarif selon la convention non signée</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Check
                            type="radio"
                            label="Aller-retour"
                            name="tripType"
                            checked={tripType === 'aller-retour'}
                            onChange={() => setTripType('aller-retour')}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            type="radio"
                            label="Aller simple"
                            name="tripType"
                            checked={tripType === 'aller-simple'}
                            onChange={() => setTripType('aller-simple')}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Check
                            type="radio"
                            label="Paiement par carte"
                            name="paymentMethod"
                            checked={paymentMethod === 'carte'}
                            onChange={() => setPaymentMethod('carte')}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            type="radio"
                            label="Paiement par balance"
                            name="paymentMethod"
                            checked={paymentMethod === 'balance'}
                            onChange={() => setPaymentMethod('balance')}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Date de retour</Form.Label>
                          <DatePicker
                            style={{ width: '100%' }}
                            value={returnDate}
                            onChange={(date) => setReturnDate(date)}
                            disabled={tripType === 'aller-simple'}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Date de départ</Form.Label>
                          <DatePicker
                            style={{ width: '100%' }}
                            value={departDate}
                            onChange={(date) => setDepartDate(date)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <Form.Label>Code Promo</Form.Label>
                        <Form.Group className="d-flex">
                          <InputGroup className="flex-grow-1">
                            <FormControl
                              placeholder="Entrez votre code promo"
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <Col md={4} className="d-flex flex-column justify-content-between">
  <div className="texto ">
    <button
      className="button-88"
      type="submit"
      style={{ width: '40%' }}
    >
      Rechercher
    </button>
  </div>
</Col>

                  
                </div>
              </div>
            </section>
          </div>
        </Row>

       






      </div>
    </section>
  );
};

export default Hero;
