import Item from "./item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca = 'Lamborghini'/>
                <Item marca = 'Bmw'/>
            </ul>
        </>
    )
}

export default List