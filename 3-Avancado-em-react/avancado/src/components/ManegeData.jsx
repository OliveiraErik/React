import { useState } from "react"

const ManegeData = () => {
    let someData = 10

    const [number, setNumber] = useState(15)

    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={()=> (someData = 15) }>Mudar Valor</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={()=> (setNumber(90)) }>Mudar Valor do State</button>
            </div>
        </div>
    )
}

export default ManegeData