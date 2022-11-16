import { Button } from "../styles/styles";
import { FcCollapse, FcExpand} from 'react-icons/fc'
import{SlCheck, SlClose}from "react-icons/sl"
import styles from '../components/Comparador/Compara.module.css'
import { useState } from "react"


function Profissionais(){

    const [show, setShow] = useState()

return(
<>
<section>
    <p className={styles.p}>PROFISSIONAIS</p>
    <div>{show?
    <div className={styles.box}>
   
        <p className={styles.p}>Cadastro <span className={styles.span} ><SlCheck color='green' /><SlClose color= 'red' /></span></p>
        <p className={styles.p}>Fotos de profissionais <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Vales <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Banco de horas <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Lançar falta<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Cadastro de lançamento em folha<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Pagamentos<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
         
        </div>:null
        }
        </div>
</section>
        <Button onClick={()=>setShow(!show)}><FcExpand /><FcCollapse/>Mostrar</Button>
   

</>
)
}

export default Profissionais