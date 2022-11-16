import React from 'react';
import {useEffect, useState} from 'react';
import Axios from "axios";
import Product_list from '../Product_list';
import Loader from '../Loader';

const ShowProducts = (props)=> {

const [equips, setEquips] = useState([]);
const [selectValue, setSelectValue] = useState([])
const [loading, setLoading] = useState(false);

function handleCreate(e){
    e.preventDefault()
    alert(selectValue)
}

useEffect(() => {
    Axios.get("http://localhost:3001/ShowProducts")
    .then((response) =>{
    setEquips(response.data);
    });
    {
    console.log(equips)
    setLoading(true)
    }
   
}, [])

return (  <div>
        <h3 >{selectValue}</h3>
        
        <select id = "products" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option value = "" >Selecione o produto...</option>
        {equips.map(equips => {

        return (
                <option value={equips.id} key={equips.id}> 
                {equips.product}
                {equips.marca}
                {equips.qtd}
                {equips.price} </option>
                )  
        })}
         {!loading && <Loader/>}
        </select>
       
        </div>
        )
        
    }
export default ShowProducts
