import logo from './blue/logo.png';
import './App.css';
import DropDow from './components/DropDow';



function App() {
  
  return (
    <div className = "App" > 

    <h1> Equip-controller</h1>
    <p> Controle de equipamentos</p>

    <img src={logo} alt="Logo"/>
    <label htmlFor="equip">  Equipamento:</label>
    <DropDow></DropDow>
    </div>
  );
}

export default App;
