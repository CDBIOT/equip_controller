import styles from "./Header.module.css"
import logo from '../../assets/logo.svg';

function Header(){
return(
    <>
    <section className={styles.section}>
    <span className={styles.texto}> PROPOSTA COMERCIAL</span>
    <div className={styles.logotipo}>
        <img src={logo} alt="logo" />
        
    </div>
    </section>
    
    <span className={styles.message}>Olá cliente! Tudo bem?</span>
    
    <div className={styles.header}>
    <p>Conforme combinado, aqui está o orçamento para aquisição da licença do sistema da CICOM.
    Lembrando que algumas funções já estão inclusas nos sistemas, 
    como por exemplo: cadastro de clientes, produtos, fornecedores, profissionais, usuários, seguradoras,
    controle de estoque, entrada de produtos por XML, diversos relatórios e muito mais!</p>
    <p>Quanto aos módulos, você contrata somente o que realmente precisar</p>
    <p>Importante: a qualquer momento você poderá remover e/ou acrescentar novos módulos em seu plano</p>
    <p> Proposta válida até: 06/02/2022</p>
</div>
</>
)

}
export default Header
