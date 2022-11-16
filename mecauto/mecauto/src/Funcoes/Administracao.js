import { Button } from "../styles/styles";
import { FcCollapse, FcExpand} from 'react-icons/fc'
import{SlCheck, SlClose}from "react-icons/sl"
import styles from '../components/Comparador/Compara.module.css'
import { useState } from "react"

function Administracao(){

    const [show, setShow] = useState()

return(
<>
<section>
    <p className={styles.p}>ADMINISTRAÇÃO </p>
    <div>{show?
    <div className={styles.box}>
        <p className={styles.p}>Controle de e-mail<span className={styles.span} ><SlCheck color='green' /><SlClose color= 'red' /></span></p>
        <p className={styles.p}>Backup <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Sped <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Sintegra <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Controle de nfs <span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
         
        </div>:null
        }
        </div>
</section>
        <Button onClick={()=>setShow(!show)}><FcExpand /><FcCollapse/>Mostrar</Button>
   
        

</>
)
}

export default Administracao