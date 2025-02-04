const ChangeMessage = ({handleMessage}) => {
    const message = ["Oi", "Olá", "Ainda", "Ai Calica", "Tá tega"]
  return (
    <div>
        <button onClick={()=> handleMessage(message[0])}>1</button>
        <button onClick={()=> handleMessage(message[1])}>2</button>
        <button onClick={()=> handleMessage(message[2])}>3</button>
        <button onClick={()=> handleMessage(message[3])}>4</button>
        <button onClick={()=> handleMessage(message[4])}>5</button>
    </div>
  )
}

export default ChangeMessage