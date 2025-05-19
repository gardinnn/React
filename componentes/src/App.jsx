// Componente pai
import './App.css'

// importar o componenete filho
import Functionalcomponents from './componentes/Functionalcomponents'
import Classcomponent from './componentes/Classcomponent'
import Propsexample from './componentes/Propsexample'

function App() {
  return (
    <>
      <h1>Hello word react</h1>
      <Functionalcomponents/>
      <Classcomponent/>
      <Propsexample name= "gabriel" years= {18}/>
      
    </>
  )
}

export default App
