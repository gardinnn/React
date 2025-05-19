import {useState} from 'react'
import './TodoApp.css';

function TodoApp() {

//    lista de tarefas
 const [todos, setTodos] = useState([]);
// Estado de texto da tarefa

 const [inputValue, setInputValue] = useState("")
//  adicionar tarefa
const handleSubmit = (e) => {
   e.preventDefault()

   if(inputValue.trim() !==  ''){
        const newTodo = {
             id: Date.now(),
             text: inputValue,
        }

        setTodos((prevTodos) => [...prevTodos, newTodo])
        setInputValue("")
    }
}

  return (
    <div className='app-container'>
      <h1 className="title">Lista de Tarefas</h1>
      {/* Form para adicionar tarefas */}
      <form onSubmit={handleSubmit} className='form'>
        <input className="input" type="text" placeholder='Adicione uma tarefa...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type='submit' className='add-button'>Adicionar</button>
      </form>


      {/* Lista de tarefas */}
      {todos.length === 0 && <p className='enpty'>Não há tarefas.</p>}
      <ul className='todo-list'>
            {todos.map((todo) => (
                <li key={todo.id} className='todo-item'>{todo.text} <button className='delete-button'>Excluir</button></li>
            ))}
      </ul>
    </div>
  )
}

export default TodoApp
