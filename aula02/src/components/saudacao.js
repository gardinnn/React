function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `A Paz, ${algumNome} !`

    }

    return(
     <>
       {nome && <p>{gerarSaudacao(nome)}</p>}
     </>
    )
}

export default Saudacao