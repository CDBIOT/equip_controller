import React  from "react"
import { Button , Span} from "./styles";
import { useState, useEffect } from "react"
import styles from "./Check.module.css"


function CheckModulo() {
    
    const [simula, setSimula] = useState()

    return(
        <>
        <div>
            {
                simula?<Span>Hello</Span>:null
            }
        </div>
        <Button onClick={()=>setSimula(true)}>Show</Button>
        <Button onClick={()=>setSimula(!simula)}>Toggle</Button>
        
        </>
    )

}

export default CheckModulo;