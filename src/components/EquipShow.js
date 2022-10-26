import React from 'react';
import {useEffect, useState} from 'react';
import Equip_list from './Equip_list';
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

function handleCreate(e){
    e.preventDefault()
    alert(selectValue)
}

return (   
    <div className='EquipShow'>
        <Equip_list></Equip_list>
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