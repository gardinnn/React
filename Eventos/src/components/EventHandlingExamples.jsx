
import { useState } from 'react'

const EventHandlingExamples = () => {
    const handleClick = () => {
        alert('testando')
    }

    const handlegreet = (name) => {
        alert(`Ola ${name}`)
    }

    const [name, setName] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Enviado! ${name}`)
    }
  return (
    <div>
      <button onClick={() => alert('oi')}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button> 
      <br />
      <button onClick={() => handlegreet("gabriel")}>Dizer olá gabriel</button>
      <button onClick={() => handlegreet("tiago")}>Dizer olá tiago</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder='Digite seu nome' />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default EventHandlingExamples
