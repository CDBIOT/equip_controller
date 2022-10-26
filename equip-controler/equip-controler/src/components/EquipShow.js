import React from 'react';
import {useEffect, useState} from 'react';
import EquipList from './EquipList';
import Axios from "axios";

const EquipShow = ()=> {

const [equips, setEquips] = useState([]);
const [selectValue, setSelectValue] = useState([])
  
useEffect(() => {
    Axios.get("http://localhost:3001/")
    .then((response) =>{
    setEquips(response.data);
    });
}, []) 


return (   
    <div className='EquipShow'>
        <EquipList></EquipList>
        <h3 >{selectValue}</h3>
    
        <select id = "equips" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option value = "" >Selecione o equipamento...</option>
        {equips.map(equips => {

        return (
                <option value key={equips.id}> {equips.patrimonio}
                {equips.equipamento}
                {equips.marca}
                {equips.modelo}
                {equips.Nsérie}
                {equips.localização}</option>
                )  
        })}
        </select>
        
        </div>
        )
        
    }
export default EquipShow