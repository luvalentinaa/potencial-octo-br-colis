import { useState } from "react"
import './index.css'


const Home = () => {
  return (
    <div>
    <div className="home">
      <h1>Home page</h1>
      <Contador/>
    </div>
    </div>
  )
  
}
const Contador = () => {
  const [contador, setContador] = useState(1)

  const adicionarContador = ()=>{
    setContador(contador + 1)
  }
  return(
    <div>
    <div>{contador}</div>
    <button onClick={adicionarContador}>Adiciconar</button>
    </div>
  )
}

export default Home 