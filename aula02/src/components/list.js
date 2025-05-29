import Item from "./item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca = 'Lamborghini' lancamento = {1963}/>
                <Item marca = 'Bmw' lancamento = {1916}/>
            </ul>
        </>
    )
}

export default List