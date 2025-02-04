import "./GameOver.css"

const GameOver = ({playAgain, score}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>Pontuação: <span>{score}</span></h2>
        <button onClick={playAgain}>Jogar Novamente</button>
    </div>
  )
}

export default GameOver