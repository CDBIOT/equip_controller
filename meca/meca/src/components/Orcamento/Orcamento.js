import React from "react"
import { CiCircleCheck } from 'react-icons/ci'
import { FcCollapse, FcExpand} from 'react-icons/fc'
import { Button } from '../../styles/styles'
import CheckModulo from "../CheckModulo/CheckModulo"
import Grid from "../GridSistemas/Grid"

import styles from "./Orca.module.css"

function Orcamento() {
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
            <tr><td><input type='checkbox'/>Oficina</td>
            <td><input type='checkbox'/>NF-e</td>
            <td><input type='checkbox'/>WhatsApp</td>
            <td><input type='checkbox'/>Backup online</td></tr>
            <tr>
            <td><input type='checkbox'/>Venda</td>
            <td><input type='checkbox'/>NFS-e</td>
            <td><input type='checkbox'/>Mercado Livre</td>
            <td><input type='checkbox'/>Catálogo Online</td></tr>
            <tr>
            <td><input type='checkbox'/>Financeiro</td>
            <td><input type='checkbox'/>NFC-e / SAT CF-e</td>
            <td><input type='checkbox'/>Fotos Online</td>
            <td><input type='checkbox'/>Estoque Online</td></tr>
            
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