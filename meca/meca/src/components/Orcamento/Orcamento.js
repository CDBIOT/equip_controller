import React, { useState } from "react"

import { Button } from '../../styles/styles'
import CheckModulo from "../CheckModulo/CheckModulo"
import Grid from "../GridSistemas/Grid"

import styles from "./Orca.module.css"

function Orcamento({value}) {

 const[check, setCheck] = useState([])

 const handleCheck = e =>{
    const{value , checked}= e.target;
if (checked){
setCheck(prev=>[...prev, value]); 
} else {setCheck(value ='' )}
console.log(value)
 }

    return(


<div>
<span className={styles.message}>Seu orçamento</span>
     
<div className={styles.header}>
         <div className={styles.box_mod}>
            <p>Esses são os módulos disponíveis. Os que estão marcados, 
            são os que você solicitou:</p>
         </div>
        <div className={styles.options}>
            <table className={styles.table}>
            <th colSpan={4}>Table</th>
            <tr>
            <td><input type='Checkbox'onChange={handleCheck} value = 'Oficina' />Oficina</td>
            <td><input type='Checkbox'onChange={handleCheck} value='NF-e'/>NF-e</td>
            <td><input type='Checkbox'onChange={handleCheck} value='WhatsApp'/>WhatsApp</td>
            <td><input type='Checkbox'onChange={handleCheck} value='Backup'/>Backup online</td></tr>
            <tr>
            <td><input type='Checkbox'onChange={handleCheck} value='Venda'/>Venda</td>
            <td><input type='Checkbox'onChange={handleCheck} value='NFS-e'/>NFS-e</td>
            <td><input type='Checkbox'onChange={handleCheck} value='Mercado'/>Mercado Livre</td>
            <td><input type='Checkbox'onChange={handleCheck} value='Catálogo'/>Catálogo Online</td></tr>
            <tr>
            <td><input type='Checkbox'onChange={handleCheck} value='Financeiro'/>Financeiro</td>
            <td><input type='Checkbox'onChange={handleCheck} value='NFC-e'/>NFC-e / SAT CF-e</td>
            <td><input type='Checkbox'onChange={handleCheck} value='Fotos'/>Fotos Online</td>
            <td><input type='Checkbox'onChange={handleCheck} value='Estoque'/>Estoque Online</td></tr>
            
            </table>
            
     </div>

<div className={styles.container_boxs}>
   <div className={styles.box}>
   <span className={styles.mec}>MECAUTO</span>
       <p>Acessos simultâneos: {}</p>
       <Grid />
   </div>

   <div className={styles.box}>
   <span className={styles.mecbox}>MECAUTO-BOX</span>
       <p>Acessos simultâneos: 5</p>
   <Grid />
   </div>
</div>
<div> 
<p> * Um acesso está incluso no plano e quatro são cortesia. A partir do sexto acesso, é cobrado valor adicional.</p>
   <p>* Os descontos citados acima, são em comparação ao plano MENSAL.</p>

</div>
</div>

</div>

    )
}
export default Orcamento