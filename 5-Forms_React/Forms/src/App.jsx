import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
    <h2>Forms</h2>
    <MyForm user={ { name: "Erik", email: "Erikzadas@gmail.com" , bio: "Sou Estudante", role: "admin"} }/>
    </>
  )
}

export default App
