import React, { useState } from 'react';
import { Form, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
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

  const handleSubmit = (values) => {
    console.log('Valeurs du formulaire:', values);
  };

  return (




    
<section class="hero bg-gray-100 min-h-screen flex items-center justify-center">
<div class="pc-tab max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <Row>
          <div className="pc-tab">
            <input checked="checked" id="tab1" type="radio" name="pct" />
            <input id="tab2" type="radio" name="pct" />
            <input id="tab3" type="radio" name="pct" />
            <nav>
              <ul>
                <li className="tab1">
                  <label htmlFor="tab1">Réserver un vol</label>
                </li>
               
                
              </ul>
            </nav>
            <section>
              <div className="tab1">
                <div className="container py-5" style={{ backgroundColor: '#fff', padding: '7px', border: '2px solid #ddd', borderRadius: '10px' }}>
                  <Form name="flightReservationForm" onSubmit={handleSubmit}>
                  <Row>
                 <Col md={5}>
               <Form.Group>
                <FormControl
                    type="text"
                  placeholder="Ville de départ"
                   value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                      />
                      </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>

                          <FormControl
                            type="text"
                            placeholder="Ville de destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                    <Col md={4}>
    <Form.Group>
      <Form.Label>Date de départ</Form.Label>
      <DatePicker
        style={{ width: '100%' }}
        value={departDate}
        onChange={(date) => setDepartDate(date)}
      />
    </Form.Group>
  </Col>
                      <Col md={6}>
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
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Type de passager</Form.Label>
                          <Form.Control
                            as="select"
                            style={{ width: '100%' }} // Appliquez les styles directement ici
                            value={passengerType}
                            onChange={(e) => setPassengerType(e.target.value)}
                            className="custom-select" // Ajoutez une classe CSS personnalisée
                          >
                            <option value="adulte">Adulte</option>
                            <option value="enfant">Enfant</option>
                            <option value="bebe">Bébé</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Mode de tarification</Form.Label>
                          <Form.Control
                            as="select"
                            style={{ width: '100%' }} // Appliquez les styles directement ici
                            value={pricingMode}
                            onChange={(e) => setPricingMode(e.target.value)}
                            className="custom-select" // Ajoutez une classe CSS personnalisée
                          >
                            <option value="convention-signee">Tarif selon la convention signée</option>
                            <option value="convention-non-signee">Tarif selon la convention non signée</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group>

                          <Form.Check
                            type="radio"
                            label="Aller-retour"
                            name="tripType"
                            checked={tripType === 'aller-retour'}
                            onChange={() => setTripType('aller-retour')}
                          />
                          <Form.Check
                            type="radio"
                            label="Aller simple"
                            name="tripType"
                            checked={tripType === 'aller-simple'}
                            onChange={() => setTripType('aller-simple')}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>

                          <Form.Check
                            type="radio"
                            label="Paiement par balance"
                            name="paymentMethod"
                            checked={paymentMethod === 'balance'}
                            onChange={() => setPaymentMethod('balance')}
                          />
                          <Form.Check
                            type="radio"
                            label="Paiement par carte"
                            name="paymentMethod"
                            checked={paymentMethod === 'carte'}
                            onChange={() => setPaymentMethod('carte')}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Code promo</Form.Label>
                          <InputGroup>
                            <FormControl
                              placeholder="Entrez votre code promo"
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <button variant="primary" style={{ marginTop: '13px'}} className="button-88" type="submit">
                          Rechercher
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>




























              
              <div className="tab2">
                <h2>Second</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nesciunt ipsum dolore error repellendus officiis aliquid a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam sapiente cupiditate. Praesentium eaque, quae error!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maiores.</p>
              </div>
              <div className="tab3">
                <h2>Third</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nobis culpa rem, vitae earum aliquid.</p>
              </div>
            </section>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default Hero;
