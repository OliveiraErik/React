import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
//Components
import Navbar from './components/Navbar'
import SearchForm from './components/Search.jsx'
//Pages
import Home from './Pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound.jsx'
import Searchs from "./pages/Searchs.jsx"

function App() {

  return (
    <>
    <h1>React Router</h1>
    <BrowserRouter>
    <Navbar />
    <SearchForm />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path="/products/:id/info" element={<Info />}/>
      <Route path="/products/:id" element={<Product />}/>
      <Route path='/search' element={<Searchs />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
