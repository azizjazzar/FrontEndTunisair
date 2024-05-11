import React, { useState } from 'react';
import { Tabs, Input, Button, Form, DatePicker, Select, Radio } from 'antd';
import { CreditCardOutlined, BankOutlined } from '@ant-design/icons';



const { TabPane } = Tabs;
const { Option } = Select;

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

  // Gérer la soumission du formulaire
  const handleSubmit = (values) => {
    // Effectuez ici votre logique de recherche avec les données saisies
    console.log('Valeurs du formulaire:', values);
  };

  return (
    <section className='hero'>
    <div className="container py-5">
    <div className="row">
    <div class="pc-tab">
<input checked="checked" id="tab1" type="radio" name="pct" />
<input id="tab2" type="radio" name="pct" />
<input id="tab3" type="radio" name="pct" />
  <nav>
    <ul>
      <li class="tab1">
        <label for="tab1">First Tab</label>
      </li>
      <li class="tab2">
        <label for="tab2">Second Tab</label>
      </li>
      <li class="tab3">
        <label for="tab3">Third Tab</label>
      </li>
    </ul>
  </nav>
  <section>
  
    <div class="tab1"  >
    <div className="container py-5"  style={{ backgroundColor:'  #fff'  , padding: '10px' ,  border: '2px solid #ddd' }}>
    <Form name="flightReservationForm" onFinish={handleSubmit}>
                      <div className="container">
                      <div class="row">
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text"  value={departure}
                                onChange={(e) => setDeparture(e.target.value)} class="form-control" />
                      <label class="form-label" for="form3Example1">Départ</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text"  value={destination}
                                onChange={(e) => setDestination(e.target.value)}class="form-control" />
                      <label class="form-label" for="form3Example2">Destination</label>
                    </div>
                  </div>
                </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Date de départ</label>
                              <DatePicker
                                style={{ width: '100%' }}
                                value={departDate}
                                onChange={(date) => setDepartDate(date)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Date de retour</label>
                              <DatePicker
                                style={{ width: '100%' }}
                                value={returnDate}
                                onChange={(date) => setReturnDate(date)}
                                disabled={tripType === 'aller-simple'}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Type de passager</label>
                              <Select
                                style={{ width: '100%' }}
                                value={passengerType}
                                onChange={(value) => setPassengerType(value)}
                              >
                                <Option value="adulte">Adulte</Option>
                                <Option value="enfant">Enfant</Option>
                                <Option value="bebe">Bébé</Option>
                              </Select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Mode de tarification</label>
                              <Select
                                style={{ width: '100%' }}
                                value={pricingMode}
                                onChange={(value) => setPricingMode(value)}
                              >
                                <Option value="convention-signee">Tarif selon la convention signée</Option>
                                <Option value="convention-non-signee">Tarif selon la convention non signée</Option>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                             
                              <Radio.Group
                                value={tripType}
                                onChange={(e) => setTripType(e.target.value)}
                              >
                                <Radio value="aller-retour">Aller-retour</Radio>
                                <Radio value="aller-simple">Aller simple</Radio>
                              </Radio.Group>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              
                              <Radio.Group
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                              >
                                <Radio value="balance">Paiement par balance</Radio>
                                <Radio value="carte">Paiement par carte</Radio>
                              </Radio.Group>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Code promo</label>
                              <Input
                                placeholder="Entrez votre code promo"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <Button type="primary" htmlType="submit">
                              Rechercher
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Form>
                    </div>
    </div>

    <div class="tab2">
      <h2>Second</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nesciunt ipsum dolore error repellendus officiis aliquid a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam sapiente cupiditate. Praesentium eaque, quae error!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maiores.</p>
    </div>
    <div class="tab3">
      <h2>Third</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nobis culpa rem, vitae earum aliquid.</p>
    </div>
  
  </section>

</div>
        
      </div>
          </div>
     
   
    </section>
  );
}

export default Hero;
