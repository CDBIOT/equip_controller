import { CiCircleCheck } from 'react-icons/ci'
import { FcCollapse, FcExpand} from 'react-icons/fc'
import { Button } from '../../styles/styles'

function simulador() {
    return(
 <div>
        <Button > Simulação <FcExpand /> <FcCollapse /> </Button>

        <CiCircleCheck />

        <div>
            <div> Simule um novo orçamento: </div>

            <p> Escolha o sistema: </p>
            <checkbox>MECAUTO</checkbox>
            <checkbox>MECAUTO-BOX</checkbox>

        </div>

      <div> Defina a quantidade de acessos simultâneos: </div>

      <div> contador ??</div>


        <p>Escolha os módulos:</p>
    <div className="check" >
        <CiCircleCheck/>
            <CiCircleCheck/>
           

      </div>
      </div>
      )
}
export default simulador