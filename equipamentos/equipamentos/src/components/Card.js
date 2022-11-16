import React from "react";
import Axios from "axios";
import {useEffect, useState} from 'react';

function Card(props){

    const[sales, setSales] = useState()

    useEffect(() => {
        Axios.get("http://localhost:3001/vendas")
        .then((response) =>{
        setSales(response.data);
        });
        {
        console.log(sales)
        }
    }, [])

return(
<div>
    {sales.map((p,index)=> (
        <h3 key={index}> 
     {p.sales}</h3>
    )
    )}
</div>
)
}
export default Card