import {useState} from 'react'

// useState = hooks

function UseStateComponents() {
    // variavel de consulta, e uma de alteração, inicio o hook
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        // setCount(count + 1);
        console.log(count);
    };

    const [user, setUser] = useState ({
        name: 'ana',
        age: 25,
        hobbies: ['leitura', 'programação'],
    })

    const UpdateUserAge = () =>{
        setUser((prevUser) => (
            {
                ...prevUser,
                age: prevUser.age + 1
            }
        ))
    }

  return (
    <div>
      <h2>Contador</h2>
      <p>Voce clicou {count} vezes</p>
      <button onClick={increment}>Icrementar</button>

      <p>Nome: {user.name} e idade: {user.age}</p>
      <button onClick={UpdateUserAge}>Icrementar idade</button>
    </div>
  );
};

export default UseStateComponents
