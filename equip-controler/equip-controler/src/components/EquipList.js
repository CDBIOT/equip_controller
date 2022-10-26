import React from "react"


function EquipList(equips) {
  

return (
    <>
    {equips.length >0 ? ( 
    equips.map((equips, index) => (
    <h1 key = {index}>
    {equips.patrimonio}
    {equips.equipamento}
    {equips.marca}
    {equips.modelo}
    {equips.Nsérie}
    {equips.localização}
    </h1>
    ))) : (

        <p1>Não há itens na lista</p1>
    )}
    </>
    )
}
export default EquipList