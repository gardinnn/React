import './App.css';
import OutraLista from './components/OutraLista';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/pessoa';
// import List from './components/list';
// import Evento from './components/Evento';
// import Form from './components/Forms';
// import Condicional from './components/condicional';


function App() {
const nome = 'jesus'

const meusItens = ['react', 'vue', 'angular']

  return (
    <div className="App">
      {/* <h1>Testando Eventos</h1> */}
      {/* <Evento/>
      <Form/> */}
      <h1>Renderização de Listas</h1>
      {/* <Condicional/> */}
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
