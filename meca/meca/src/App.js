
import './App.css';
import GlobalStyle from './styles/global.ts';
import CheckModulo from './components/CheckModulo/CheckModulo';
import { Button } from './components/CheckModulo/styles';
import Orcamento from './components/Orcamento/Orcamento';
import Header from './components/Header/Header';
import Simulador from './components/Simulador/simulador';
import Container from "./components/CheckModulo/Container"

function App() {

  return (
    <div className="App ">
     
       <Header />

        <GlobalStyle />
        <CheckModulo />
        <Orcamento />
        <Simulador />
      
    </div>
  );
}

export default App;
