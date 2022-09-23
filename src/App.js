import logo from './blue/logo.png';
import './App.css';
import React, { useState } from 'react';
import DropDow from './components/DropDow';
import Form from './components/Form';

import CadEquip from './components/CadEquip';
import Axios from "axios";

function App() {
  
const [values, setValues] = useState()

const handleClick = ()=>{

  Axios.post("http://localhost:3001/",{
    equipamento: values.equipamento,
    patrimonio: values.patrimonioconst,
    marca: values.marca,
    modelo:values.modelo,
    Nsérie: values.Nsérie,
    localização:values.localização
  });
}



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
