import { Button } from "../styles/styles";
import { FcCollapse, FcExpand} from 'react-icons/fc'
import{SlCheck, SlClose}from "react-icons/sl"
import styles from '../components/Comparador/Compara.module.css'
import { useState } from "react"


function Oficina(){


    const [show, setShow] = useState()

return(
<>
<section>
    <p className={styles.p}>OFICINA (MÓDULO) </p>
    <div>{show?
    <div className={styles.box}>
   
       
        <p className={styles.p}>Orçamento<span className={styles.span} ><SlCheck color='green' /><SlClose color= 'red' /></span></p>
        <p className={styles.p}>Ordem de serviço<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Veiculos em espera<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Cadastro de serviços <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Envio de SMS <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Fotos de veiculos<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Devolução (cliente) <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Gnv ?<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Requisição de produtos<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Lembrete de revisão ?<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
         
        </div>:null
        }
        </div>
</section>
        <Button onClick={()=>setShow(!show)}><FcExpand /><FcCollapse/>Mostrar</Button>
   
        

</>
)
}

export default Oficina