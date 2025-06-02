function Evento(){

    function meuEvento(){
        console.log("Glória a Deus!")
    }

    return(
        <div>
            <p>Clique aqui para desparar um evento.</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento