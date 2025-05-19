import {useState, useEffect} from 'react'

const UseEfecttsExample = () => {


    // Sem dependencias
    useEffect(() => {
        console.log('Rodou UE1')
    })


    //  Com dependencias vazias/ array dep. vazio
    useEffect(() => {
         console.log('Rodou UE2')
    }, [])


    // useState ativa a re-redenderização
    const [count, setCount] = useState(0)

    // Com dependencias
    useEffect(() => {
        console.log('Rodou E3')
   }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>aumentar contagem</button>
    </div>
  )
}

export default UseEfecttsExample
