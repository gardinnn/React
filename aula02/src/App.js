import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';
import Frase from './components/Frase'


function App() {
const nome = 'jesus'

  return (
    <div className="App">
      <Frase/>
      <SayMyName nome = 'gabriel'/>
      <SayMyName nome = 'Joao'/>
      <SayMyName nome = {nome}/>
      <Pessoa nome = ' Paulo' idade = ' 40' profissao = ' Apóstolo de Cristo' foto = "https://via.placeholder.com" />
    </div>
  );
}

export default App;
