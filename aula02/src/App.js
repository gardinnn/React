// import './App.css';
// import { useState } from 'react';
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/saudacao';
// import OutraLista from './components/OutraLista';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/pessoa';
// import List from './components/list';
// import Evento from './components/Evento';
// import Form from './components/Forms';
// import Condicional from './components/condicional';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './layout/NavBar';
import Footer from './layout/footer';


function App() {
  // const [nome, setNome] = useState()
// const nome = 'jesus'

// const meusItens = ['react', 'vue', 'angular']

  return (
    // <div className="App">
      /* <h1>Testando Eventos</h1> */
      /* <Evento/>
      <Form/> */
      /* <h1>State Lift</h1> */
      /* <Condicional/> */
      /* <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/> */
      /* <SeuNome setNome={setNome}/>
      <Saudacao nome = {nome}/> */
    // </div>
    
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path= "/">
            <Home/>
          </Route>
          <Route path= "/empresa">
            <Empresa/>
          </Route>
          <Route path= "/contato">
            <Contato/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    
  );
}

export default App;
