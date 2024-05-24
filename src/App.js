import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Profile from './components/admin/ProfilAdmin/Profil';
import UserList from './components/admin/clients/client'

import UpdateUser from './components/admin/clients/updateclient';
import AddUser from './components/admin/clients/addclient';
import ContractForm from './components/admin/contrat/contrat';
import ContractList from './components/admin/contrat/listcontrat';
import UpdateContract from './components/admin/contrat/updatecontrat';
import Dashboard from './components/admin/Dashboard/dashboard';
import UserCountChart from './components/admin/Dashboard/chartuser';
import CompteAlimentationForm from './components/admin/compte/formcompte';
import CompteTable from './components/admin/compte/tablecompte';
import PaymentForm from './components/admin/compte/payment';
import AccountBox from './components/frontend/auth/indexx';
import Pages from './components/frontend/Pages/Pages';
import Actualite from './components/admin/Actualites/Actualites';
import UserProfile from './components/frontend/Home/Profil';
import MultiStepForm from './components/frontend/moteur';
import Help from './components/IA/Help';
import aproposdenous from './components/frontend/A propos de nous';
import pourqoui from './components/frontend/header/pourqoui';
import Footer from './components/frontend/Pages/footer';



function App() {
  return (
    <div className='App' >

      <Router>

        <Routes>

          <Route exact path="/" Component={Pages} />
          <Route exact path="/page" Component={Pages} />
          <Route path="/indexx" Component={AccountBox} />
          <Route exact path="/profil" Component={UserProfile} />
          <Route exact path="/admin" Component={MasterLayout} />
          <Route exact path="/admin/dashboard" Component={Dashboard} />
          <Route exact path="/admin/profile" Component={Profile} />
          <Route exact path="/Help" Component={Help} />
          <Route exact path="/A propos de nous" Component={aproposdenous} />
          <Route exact path="/pourqoui" Component={pourqoui} />
          <Route exact path="/admin/client" Component={UserList} />
          <Route exact path="/admin/update/:id" Component={UpdateUser} />
          <Route exact path="/admin/addclient" Component={AddUser} />
          <Route exact path="/admin/contract" Component={ContractForm} />
          <Route exact path="/admin/listecontract" Component={ContractList} />
          <Route exact path="/admin/updatecontract/:id" Component={UpdateContract} />
          <Route exact path="/admin/chartuser" Component={UserCountChart} />
          <Route exact path="/admin/formcompte" Component={CompteAlimentationForm} />
          <Route exact path="/admin/tablecompte" Component={CompteTable} />
          <Route exact path="/admin/paymentform" Component={PaymentForm} />
          <Route exact path="/admin/actualite" Component={Actualite} />
          <Route exact path="/admin/moteur" Component={MultiStepForm} />
          <Route exact path="/footer" Component={Footer}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;


