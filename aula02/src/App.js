import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';
import List from './components/list';


function App() {
const nome = 'jesus'

  return (
    <div className="App">
      
      <SayMyName nome = 'gabriel'/>
      <SayMyName nome = 'Joao'/>
      <SayMyName nome = {nome}/>
      <Pessoa nome = ' Paulo' idade = ' 40' profissao = ' Apóstolo de Cristo'  />
      <List/>
    </div>
  );
}

export default App;
