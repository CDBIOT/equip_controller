import { Button } from "../styles/styles";
import { FcCollapse, FcExpand} from 'react-icons/fc'
import{SlCheck, SlClose}from "react-icons/sl"
import styles from '../components/Comparador/Compara.module.css'
import { useState } from "react"


function Vendas(){

    const [show, setShow] = useState()

return(
<>
<section>
    <p className={styles.p}>VENDAS (Módulo) </p>

    <div>{show?
    <div className={styles.box}>
        <p className={styles.p}>Orçamento<span className={styles.span} ><SlCheck color='green' /><SlClose color= 'red' /></span></p>
        <p className={styles.p}>Incluir kit ?<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Requisição de produtos ?<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Pedido de produtos ? <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Controle de entregas<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Devolução (cliente) <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
         
        </div>:null
        }
        </div>
</section>
        <Button onClick={()=>setShow(!show)}><FcExpand /><FcCollapse/>Mostrar</Button>
   
        

</>
)
}

export default Vendas