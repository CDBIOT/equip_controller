import logo from './blue/logo.png';
import logo_toi from './blue/logo_toi.png';
import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';
import Card from './components/Card'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import CadEquip from './components/CadEquip';
import Axios from "axios";
import EquipShow from './components/EquipShow';
import Equip_list from './Equip_list';

function App() {
  
const [values, setValues] = useState()
const [listEquips, setListEquips] = useState()
console.log(listEquips)

const handleClick = ()=>{

  Axios.post("http://localhost:3001/",{
    patrimonio: values.patrimonio,
    equipamento: values.equipamento,
    marca: values.marca,
    modelo:values.modelo,
    Nsérie: values.Nsérie,
    localização:values.localização
  });
}

  return (
    <Router>
<div className = "App" > 

<p>  <img src={logo} alt="Logo"/>
<img src={logo_toi} alt="Logo"/></p>
<p><h1> Equip-controller</h1>Controle de equipamentos</p>

<EquipShow></EquipShow>

<label htmlFor="equip">  Equipamento:</label>

  {typeof listEquips !== "undefined" && 
  listEquips.map((value)=>{
  return( 
    <Card 
    key={value.id}
    listEquips={listEquips}
    setListEquips={setListEquips}
    patrimonio={value.patrimonio}
    equipamento={value.equipamento}
    marca={value.marca}
    modelo={value.modelo}
    Nsérie={value.Nsérie}
    localização={value.localização}
    >
    </Card>
  )
  })}
    
    <CadEquip />
    <button onClick={handleClick}>Listar</button>
   </div>
  </Router>
  );
  }

export default App;
