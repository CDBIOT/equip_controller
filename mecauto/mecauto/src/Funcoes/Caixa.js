
import { Button } from "../styles/styles";
import { FcCollapse, FcExpand} from 'react-icons/fc'
import{SlCheck, SlClose}from "react-icons/sl"
import styles from '../components/Comparador/Compara.module.css'
import { useState } from "react"


function Caixa(){
    const [show, setShow] = useState()

return(
<>
<section>
    <p className={styles.p}>CAIXA </p>
    <div>{show?
    <div className={styles.box}>
   
        <p className={styles.p}>Configurações<span className={styles.span} ><SlCheck color='green' /><SlClose color= 'red' /></span></p>
        <p className={styles.p}>Movimento de caixas<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Correções <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Extrato de caixa <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
         
        </div>:null
        }
        </div>
</section>
        <Button onClick={()=>setShow(!show)}><FcExpand /><FcCollapse/>Mostrar</Button>
   
        

</>
)
}

export default Caixa