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

<section className="hero bg-transparent min-h-screen flex items-center justify-center">
  <div className="pc-tab ">
    {/* Votre formulaire ici */}
        <Row>
          <div className="pc-tab">
            <input checked="checked" id="tab1" type="radio" name="pct" />
            <input id="tab2" type="radio" name="pct" />
            <input id="tab3" type="radio" name="pct" />
            <nav>
            <ul>
  <li className="tab1">
    <label htmlFor="custom-label" className="custom-label" style={{ backgroundColor:'rgba(255, 255, 255, 0.25) , border: 2px solid #ddd', borderRadius: '15px', backdropFilter: 'blur(5px)'}}>Réserver un vol</label>
  </li>
</ul>
            </nav>
            <section>
              <div className="tab1">
              <div className="container py-1 custom-container " style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', padding: '7px', border: '2px solid #ddd', borderRadius: '15px', backdropFilter: 'blur(5px)' }}>
                  <Form name="flightReservationForm" onSubmit={handleSubmit}>
                    
                  <Row className="mb-3">
  {/* Ville de destination */}
  <Col md={3}>
    <Form.Group>
    <Form.Label>Ou Allez-vous</Form.Label>

      <FormControl
        type="text"
        placeholder="Ville de destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
    </Form.Group>
  </Col>
  {/* Ville de départ */}
  <Col md={3}>

    <Form.Group>
    <Form.Label>D'ou partez-vous </Form.Label>

      <FormControl

        type="text"
        placeholder="Ville de départ"
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
      />
    </Form.Group>
  </Col>
  {/* Type de passager */}
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
  {/* Mode de tarification */}
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
  {/* Boutons radio "Aller-retour" et "Aller simple" */}
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

  {/* Boutons radio "Paiement par carte" et "Paiement par balance" */}
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
  <Col md={8}>    <Form.Label>Code Promo</Form.Label>

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
  <Col md={4} className="d-flex flex-column align-items-end justify-content-between">
  <div></div> {/* Espace vide pour pousser le bouton vers le bas */}
  <button 
    variant="primary" 
    className="button-88 align-self-center mt-1" 
    type="submit"
  >
    Rechercher
  </button>
</Col>


</Row>


                  </Form>
                 
                </div>
              </div>

            </section>
          </div>
        </Row>
      </div>

    </section>




  );
}


export default Hero;
