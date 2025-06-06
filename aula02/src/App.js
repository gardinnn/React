import './App.css';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/pessoa';
// import List from './components/list';
// import Evento from './components/Evento';
// import Form from './components/Forms';
import Condicional from './components/condicional';


function App() {
const nome = 'jesus'

  return (
    <div className="App">
      {/* <h1>Testando Eventos</h1> */}
      {/* <Evento/>
      <Form/> */}
      <h1>Renderização condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;
