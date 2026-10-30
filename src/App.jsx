import { useState } from 'react'
import Calculator from './components/Calculator.jsx'
import FlipCardGame from './components/FlipCardGame.jsx'
import ScratchCardGame from './components/ScratchCardGame.jsx'
import SlotMachine from './components/SlotMachine.jsx'

function App() {
  const [screen, setScreen] = useState("calculator")
  const [display, setDisplay] = useState("0")

  function appendDigit(digit) {
    setDisplay(prev => (prev === "0" ? digit : prev + digit))
  }

  function handleNumberOneClick() {
    setScreen("flipcard")
  }

  function handleNumberTwoClick() {
    setScreen("scratchcard")
  }

  function handleFlipCardWin() {
    appendDigit("1")
    setScreen("calculator")
  }

  function handleScratchCardWin() {
    appendDigit("2")
    setScreen("calculator")
  }

  if (screen === "flipcard") {
    return <FlipCardGame onWin={handleFlipCardWin} />
  }

  if (screen === "scratchcard") {
    return <ScratchCardGame onWin={handleScratchCardWin} />
  }

  return (
    // <Calculator
    //   display={display}
    //   onNumberOneClick={handleNumberOneClick}
    //   onNumberTwoClick={handleNumberTwoClick}
    // />
    <SlotMachine></SlotMachine>
  )
}

export default App