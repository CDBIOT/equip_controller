import React, { useState } from 'react'
import { FcCollapse, FcExpand} from 'react-icons/fc'
import { Button } from '../../styles/styles'
import styles from './Simula.module.css'

function Simulador() {

    const[check, setCheck] = useState([])

    const handleCheck = e =>{
       const{value , checked}= e.target;
   if (checked){
   setCheck(prev=>[...prev, value]); 
   } else {setCheck(value ='' )}
   console.log(value)
    }

    return(
<>
<Button > Simulação <FcExpand /> <FcCollapse /> </Button>

<span className={styles.message}>Simule um novo orçamento: </span>
      
<section className={styles.header}>
        <div className={styles.box}>
            <p> Escolha o sistema: </p>
        </div>

    
      <div className={styles.box}> Defina a quantidade de acessos simultâneos: 
      <div> contador ??</div>
      </div>

      <div className={styles.box_mod}>
        

        <p>Escolha os módulos:</p>

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
   
    </div>
      
</section>
</>
      )
}
export default Simulador