import Button from "./button"

function Evento(){

    function meuEvento(){
        console.log("Glória a Deus!")
    }

    function segundoEvento(){
        console.log("Aleluia!")
    }

    return(
        <div>
            <p>Clique aqui para desparar um evento.</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento