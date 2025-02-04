import './App.css'

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

import { usefetch } from './hooks/useFetch'

function App() {
  const [products, setProducts] = useState([])

  const {data: items, httpConfig, loading, error} = usefetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // useEffect(() => {
  //   async function fecthData() {
  //     const res = await fetch(url)

  //     const data = await res.json()
  
  //     setProducts(data)
  //   }

  //   fecthData()
  // }, [])


  const handleSubmit = async(e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // const addedProduct = await res.json()

    // setProducts((prevProducts)=> [...prevProducts, addedProduct])

    httpConfig(product,"POST")

    setName("")
    setPrice("")
  }
   
  const handleRemoveProduct = async (id)=>{
    await fetch(`http://localhost:3000/products/${id}`,
      {method: "DELETE"}
    )
    httpConfig({ id }, "DELETE");
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading &&
            <ul>
            {items && items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}  
                <button onClick={()=> handleRemoveProduct(product.id) }>X</button>
                </li>
            ))}
          </ul>
      }
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input 
          type="text" 
          value={name} 
          name="name"
          onChange={(e)=> setName(e.target.value)}
          />
        </label>
        <label>
          Preço:
          <input 
          type="number" 
          value={price} 
          name="price"
          onChange={(e)=> setPrice(e.target.value)}
          />
        </label>
        {loading && <input type='text' disabled value="Aguarde"/>}
        {!loading && 
        <input 
        type="submit" 
        value="Criar" 
        style={
         { color: "#000"}
        }
        />}
        </form>
      </div>
    </>
  )
}

export default App
