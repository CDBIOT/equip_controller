import Administracao from '../../Funcoes/Administracao'
import Caixa from '../../Funcoes/Caixa'
import Clientes from '../../Funcoes/Clientes'
import Financeiro from '../../Funcoes/Financeiro'
import Oficina from '../../Funcoes/Oficina'
import Produtos from '../../Funcoes/Produtos'
import Profissionais from '../../Funcoes/Profissionais'
import Vendas from '../../Funcoes/Vendas'
import styles from './Compara.module.css'

function Comparador(){

return(
<>
<span className={styles.message}>Seu orçamento</span>

<div className={styles.header}>

    <Clientes />
    <Vendas/>
    <Oficina />
    <Caixa />
    <Produtos />
    <Profissionais />
    <Financeiro />
    <Administracao />
    
</div>
</>
)
}

export default Comparador