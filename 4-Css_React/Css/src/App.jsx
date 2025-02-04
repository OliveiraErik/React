import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Tittle from './components/Tittle'

function App() {
  const n = 15
  const [name] = useState("Erik")
  const redTittle = false
  return (
    <>
    <h1>React com Css</h1>
    <MyComponent/>
    <p>Este palagrafo é do appjs</p>
    <p style={{ 
      color:"blue", 
      padding: "25px", 
      borderTop:"2px solid red" }}>
        Este elemento foi estilizado  de forma inline
      </p>
      <h2 style={n<10 ? ({color: "purple"}) : ({color:"pink"})}>Css Dinâmico</h2>
      <h2 style={n<10 ? ({color: "purple"}) : ({color:"pink"})}>Css Dinâmico</h2>
      <h2 style={name === "Erik" ? ({color: "green", backgroundColor: "#000"}) : null}>Teste Nome</h2>
      <h2 className={redTittle ? "red-title" : "title" }>Este Titulo vai ter Classe Dinâmica</h2>
      <Tittle/>
    </>
  )
}

export default App
