import styles from "../../styles/Graphics.module.css"
import React from "react";
import { Chart } from "react-google-charts"
import Axios from "axios";
import {useEffect, useState} from 'react';
import _ from 'lodash'; 

function Graphics(){
    
    const [temps, setTemperaturas] = useState()

    const loadData = (data) =>{
        const values = _.groupBy(data, () => {
            return values.temps
        })
    }
    
    useEffect(() => {
        //Axios.get("http://localhost:8081/temps")
        Axios.get('https://polar-beyond-82520.herokuapp.com/temps')
        .then((response) =>{
        setTemperaturas(response.data.temps);
        const values = _.groupBy(temps, () => { return values.temps });
        {   
       
        console.log(temps.ano)
        console.log(values)
        }
    });
    }, []);

return (
    <>
    <h1>Graphics</h1>
    
    <section className={styles.chart}>
      
    <form class="search" action="/grafico" method="post">
            <div class="row">            
                <div class="col-md-4">
                    <label for="startDate" class="form-label">Data Inicial</label>
                    <input id="startDate" value="{{startDate}}" class="form-control" type="date" name="startDate" />
                </div>
                <div class="col-md-4">
                    <label for="finalDate" class="form-label">Data final</label>
                    <input id="finalDate" value="{{finalDate}}" class="form-control" type="date" name="finalDate" />
                    </div>
                <div class="col-md-4">
                    <button class="bnt-exit" type="submit">Pesquisar</button>
                    
                </div>
            </div>
        </form>
        
        <div className={styles.chart_1}>
                    <div id='graph_dia'></div>
                </div>
    </section>

    <section class="chart">
        <div class="charts">
        <div id='graph_dia'></div>
        <div id='graph_mes'></div>
        <div id='graph_ano'></div>
        </div>
    </section>
    <div>
    <table className={styles.table}>
        <tr><th className={styles.th} colSpan={4}>
        <td width="20%"className={styles.th}>Temp</td>
        <td width="20%" className={styles.th}>Local</td>
        <td width="20%" className={styles.th}>Dia</td>
        <td width="20%" className={styles.th}>Mes</td>
        <td width="20%" className={styles.th}>Ano</td>
        </th></tr>
    </table>
  
        <tbody className={styles.tbody}>
    
        {temps.map((temps, index) => (
        <tr key = {index}>
        <td width="20%"className={styles.td}>{temps.temperatura}</td>
        <td width="20%"className={styles.td}>{temps.local}</td>
        <td width="20%"className={styles.td}>{temps.dia}</td>
        <td width="20%"className={styles.td}>{temps.mes}</td>
        <td width="20%"className={styles.td}>{temps.ano}</td></tr>
        ))} 
       
        </tbody>
        <tfooter>
       
        </tfooter>
    </div>
    </>
)
    
}
export default Graphics