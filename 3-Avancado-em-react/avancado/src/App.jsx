import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails'
import CondicionalRender from './components/CondicionalRender'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Fragment from './components/fragment'
import ListRender from './components/ListRender'
import ManegeData from './components/ManegeData'
import ShowUserName from './components/ShowUserName'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id: 2, brand: "Mitsubishi", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "Bmw", color: "Vermelho", newCar: true, km: 0},
    {id: 4, brand: "Fusca", color: "Branco", newCar: false, km: 10000},
    {id: 5, brand: "Evoque", color: "Amarelo", newCar: true, km: 0},
    {id: 6, brand: "Kia", color: "Roxo", newCar: true, km: 0}
  ] 

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
    <h1>Avançado em React</h1>
     <div>
      {/*Imagem em public*/}
      <img src="/img1.jpg" alt="Paisagem" />
     </div>
     <div>
      {/*Imagem em assets*/}
      <img src={City} alt="Cidade" />
     </div>
     <ManegeData/>
     <ListRender/>
     <CondicionalRender/>
     <ShowUserName name="Erik"/>
     <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

     <CarDetails brand="Fiat" km={0} color="Verde" newCar={true}/>
     <CarDetails brand="VW" km={2000} color="Cinza" newCar={false}/>

     {cars.map((car)=>(
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      color={car.color} 
      km={car.km} 
      newCar={car.newCar}
      />
     ))}

     <Fragment propFragment="test"/>
     <Container myValue={10}>
      <p>Este é o conteudo do container</p>
     </Container>
     <Container myValue={20}>
      <h5>Testando container</h5>
     </Container>

     <ExecuteFunction myFunction={showMessage}/>

     <Message msg={message}/>
     <ChangeMessage handleMessage={handleMessage}/>
    </>
  )
}

export default App
