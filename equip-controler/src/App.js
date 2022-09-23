import logo from './blue/logo.png';
import './App.css';
import DropDow from './components/DropDow';
import Form from './components/Form';

import CadEquip from './components/CadEquip';


function App() {
  
  return (
    <div className = "App" > 

    <h1> Equip-controller</h1>
    <p> Controle de equipamentos</p>
 
    <img src={logo} alt="Logo"/>
    <label htmlFor="equip">  Equipamento:</label>
    <DropDow></DropDow>
    <CadEquip></CadEquip>
    <Form></Form>
    </div>
  );
}

export default App;
