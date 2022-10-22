import styles from "./Grid.module.css"


function Grid(){

return(
<table className={styles.table}>
<th className={styles.th} colSpan={4}>Acessos simultâneos</th>
<tr className={styles.tr}><td></td><td>À vista </td><td> Em 2x</td><td>Em 3x</td></tr>
<tr><td className={styles.td}>Anual: Desconto de 24%</td><td>xx</td><td>xx</td><td>xx</td></tr>
<tr><td className={styles.td}>Semestral: Desconto de 16%</td><td>xx</td><td>xx</td><td>xx</td></tr>
<tr><td className={styles.td}>Trimestral: Desconto de 12%</td><td>xx</td><td>xx</td><td>xx</td></tr>
<tr><td className={styles.td}>Mensal: </td><td>xx</td><td> - </td><td> - </td></tr>
</table>

) 


}
export default Grid