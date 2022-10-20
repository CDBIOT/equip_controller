
import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom';
import Card from './components/Card'
import Axios from "axios";
import EquipShow from './components/EquipShow';
import Navbar from'./components/Navbar';


function App() {

const [values, setValues] = useState()
const [listEquips, setListEquips] = useState()
console.log(listEquips)


  return (
   
<div className = "App" > 
<Routes />
<Navbar />

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
    
  
    <button onClick={handleClick}>Listar</button>
   </div>

  );
  }

export default App;
