import './App.css';
import helloWorld from './components/helloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';

function App() {
const nome = 'jesus'

  return (
    <div className="App">
      <helloWorld/>
      <SayMyName nome = 'gabriel'/>
      <SayMyName nome = 'Joao'/>
      <SayMyName nome = {nome}/>
      <Pessoa nome = ' Paulo' idade = ' 40' profissao = ' Apóstolo de Cristo' foto = "https://via.placeholder.com" />
    </div>
  );
}

export default App;
