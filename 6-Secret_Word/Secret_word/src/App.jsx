//Css
import './App.css'
//React
import { useCallback, useEffect, useState } from 'react'

//Data
import {wordsList} from "./data/words"

//Components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "gameOver"},
]

const qtnGuess = 5

function App() {
  const [gameStage,setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord,setPickedWord] = useState("")
  const [pickedCategory,setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(qtnGuess)
  const[score, setScore] = useState(0)

  const pickWordAndPickCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category}
  },[words])

  const startGame = useCallback(() => {
    clearLetterStages()

    const {word, category } = pickWordAndPickCategory()

    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l)=>l.toLowerCase())
    
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  },[pickWordAndPickCategory])

  const verify = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    if(
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
    ){
        return;
      }

      if(letters.includes(normalizedLetter)){
        setGuessedLetters((actualGuessedLetters) => [
          ...actualGuessedLetters, 
          normalizedLetter,
        ])
       }else {
        setWrongLetters((actualWrongLetters) => [
          ...actualWrongLetters, 
          normalizedLetter,
        ])
        setGuesses((actualGuesses)=> actualGuesses - 1)
      }
  }

  const clearLetterStages = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {

    if(guesses === 0){
      clearLetterStages()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length &&
      gameStage === stages[1].name
    ){
      setScore((actualScore)=> (actualScore += 100))
      startGame()
    }
  },[guessedLetters, letters, startGame, gameStage])
  
  const playAgain = () =>{
    setScore(0)
    setGuesses(qtnGuess)

    setGameStage(stages[0].name)
  }

  return (
    <>
    {gameStage === "start" && <StartScreen startGame={startGame}/>}
    {gameStage === "game" && 
    <Game verify={verify}
    pickedWord={pickedWord}
    pickedCategory={pickedCategory}
    letters={letters}
    guessedLetters={guessedLetters}
    wrongLetters={wrongLetters}
    guesses={guesses}
    score={score}
    />
    }
    {gameStage === "gameOver" && <GameOver playAgain={playAgain} score={score}/>}
    </>
  )
}

export default App
