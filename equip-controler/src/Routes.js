import React from 'react';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import CadEquip from './components/pages/CadEquip';
import Equip_list from './components/Equip_list';
import EquipShow from './components/EquipShow';

function Routes() {
  
return (
    <Router>
    <Navbar />
         <Switch>
            <Route exact path="/" component={Home}><Home /></Route>
            <Route path="/Contato" component={Contato}><Contato /></Route>
            <Route path="/CadEquip"component={CadEquip} ><CadEquip /></Route>
            <Route path="/Equip_list" component={Equip_list}><Equip_list /></Route>
            <Route path="/EquipShow" component={EquipShow}><EquipShow /></Route>
         </Switch>
    </Router>
)
}
export default Routes
