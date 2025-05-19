import React from 'react'

const jsxExampless = () => {

   const userName = 'carlos';

   const user = {
    name : 'ana',
    lastname: 'silva',
   };

   function getGreeting(name){
      return `Ola ${name}`
   }

   const userIsloggedin = false;

   const userRole = 'adimn'

   const users = [
    {id : 1, name : "joão"},
    {id : 2, name : "Pedro"},
    {id : 3, name : "Tiago"}
   ]


  return (

    <div>
        {/* BASICO */}
        <h2>Conteudo que o usuario vai ver</h2>

        {/* LISTANDO INFORMAÇÕES DO USUARIO */}
        <p>O nome do usuario é {userName} </p>

        usuario: {user.name} {user.lastname}
        <p>{2*2}</p>

        <p>{getGreeting(userName)}</p>
        <p>{getGreeting('Gabriel')}</p>

        {/* Diferenças HTML */}
        <div className='alguma-coisa'>Este cara</div>
        <div className="teste">ok</div>
        <button onClick={() =>  alert("teste")}>clique em mim</button>
        <p><input type="text" name="" id="" placeholder='Digite algo' /></p>

        {/* Renderização condicional */}

        {userIsloggedin ? (<p>Caso: Está logado</p>) : (<p>Caso: Não está logado</p>)}

        <p>{userRole === "adimn" && <p> Voce é um adimn</p>}</p>

        {/* Renderização de listas */}

        <div>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
        
        

    </div>

  )
};

export default jsxExampless
