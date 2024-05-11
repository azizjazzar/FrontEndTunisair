import { Route, Routes } from "react-router-dom";
import Dashboard from '../components/admin/Dashboard/dashboard';
import Profile from '../components/admin/ProfilAdmin/Profil';
import UpdateUser from '../components/admin/clients/updateclient';
import AddUser from '../components/admin/clients/addclient';
import ContractForm from '../components/admin/contrat/contrat';
import ContractList from '../components/admin/contrat/listcontrat';
import UpdateContract from '../components/admin/contrat/updatecontrat';
import UserList from '../components/admin/clients/client';
import MasterLayout from "../layouts/admin/MasterLayout";
function AppRoutes() {
    return (
      <Routes>
         <Route  exact path="/admin" Component={MasterLayout} />
          <Route  exact path="/admin/dashboard" Component={Dashboard } />
          <Route exact  path="/admin/profile" Component={Profile} />
          <Route exact path="/admin/client" Component={UserList} />
          <Route exact path="/admin/update/:id" Component={UpdateUser} />
          <Route exact path="/admin/addclient" Component={AddUser} />
          <Route exact path="/admin/contract" Component={ContractForm} />
          <Route exact path="/admin/listecontract" Component={ContractList} />
          <Route exact path="/admin/updatecontract/:id" Component={UpdateContract} />
      </Routes>
    );
  }
  export default AppRoutes;
