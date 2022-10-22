
import './App.css';
import GlobalStyle from './styles/global.ts';
import CheckModulo from './components/CheckModulo/CheckModulo';
import { Button } from './components/CheckModulo/styles';
import Orcamento from './components/Orcamento/Orcamento';
import Header from './components/Header/Header';
import Simulador from './components/Simulador/Simulador';
import Container from "./components/CheckModulo/Container"
import Comparador from './components/Comparador/Comparador';

function App() {

  return (
    <div className="App ">
     
       <Header />

        <GlobalStyle />
        <CheckModulo />
        <Orcamento />
        <Simulador />
        <Comparador />
      
    </div>
  );
}

export default App;
