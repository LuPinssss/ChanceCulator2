import { useState } from 'react'
import Calculator from './components/Calculator.jsx'
import FlipCardGame from './components/FlipCardGame.jsx'

function App() {
  const [screen, setScreen] = useState("calculator")
  const [display, setDisplay] = useState("0")

  function handleNumberOneClick() {
    setScreen("flipcard")
  }

  function handleWin() {
    setDisplay(prev => (prev === "0" ? "1" : prev + "1"))
    setScreen("calculator")
  }

  return screen === "calculator" ? (
    <Calculator display={display} onNumberOneClick={handleNumberOneClick} />
  ) : (
    <FlipCardGame onWin={handleWin} />
  )
}

export default App