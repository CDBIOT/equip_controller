import Administracao from '../../Funcoes/Administracao'
import styles from './Compara.module.css'

function Comparador(){

return(
<>
<span className={styles.message}>Seu orçamento</span>

<div className={styles.header}>
<Administracao />
</div>
</>
)
}

export default Comparador