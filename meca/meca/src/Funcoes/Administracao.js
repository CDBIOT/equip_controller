
import{SlCheck, SlClose}from "react-icons/sl"
import styles from '../components/Comparador/Compara.module.css'

function Administracao(){

return(
<>
<section>
    <div className={styles.box}>
        <p className={styles.p}>CLIENTES </p>
        <p className={styles.p}>Cadastro de clientes<span className={styles.span} ><SlCheck color='green' /><SlClose color= 'red' /></span></p>
        <p className={styles.p}>Fotos de clientes<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Histórico de cliente<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Recebimentos<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Mala direta<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Recibo Avulso<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Recebimento previsto<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Recebimento em carteira<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
        <p className={styles.p}>Cadastro de veículos<span className={styles.span}><SlCheck color='green'  /><SlClose color= 'red'/></span></p>
    </div>
</section>
</>
)
}

export default Administracao