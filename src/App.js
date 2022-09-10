import logo from './blue/logo.png';
import './App.css';
import Frase from './components/Frase';
import Pessoas from './components/Pessoas';
import SayMyName from './components/SayMyName';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const name = 'Cristiano'
 
  return (
    <div className = "App" > 
<h1> Equip-controller</h1>
<p> Controle de equipamentos</p>
<Frase />
<Form />
<Evento numero="1" />
<Evento numero="2" />
<img src={logo} alt="Logo"/>
<SayMyName nome = {name}/>

</div>
  );
}

export default App;
