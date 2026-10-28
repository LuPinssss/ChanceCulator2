import { useState } from "react"
import ScratchCard from "./ScratchCard.jsx"

const WINNING_VALUE = 2
const DECOY_VALUES = [3, 4, 5, 6, 7, 8, 9, 1, 6]

function shuffle(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function buildCardValues() {
  const correctPosition = Math.floor(Math.random() * (DECOY_VALUES.length + 1))
  const values = [...DECOY_VALUES]
  values.splice(correctPosition, 0, WINNING_VALUE)
  return values
}

function ScratchCardGame({ onWin }) {
  const [cardValues] = useState(() => shuffle(buildCardValues()))
  const [wrongValue, setWrongValue] = useState(null)

  function handleReveal(value) {
    if (value === WINNING_VALUE) {
      onWin()
    } else {
      setWrongValue(value)
    }
  }

  function handleTryAgain() {
    setWrongValue(null)
  }

  return (
    <div className="relative flex min-h-screen justify-center items-center bg-[#15151f]">
      <div className="grid grid-cols-5 gap-5">
        {cardValues.map((value, index) => (
          <ScratchCard key={index} value={value} onReveal={handleReveal} />
        ))}
      </div>

      {wrongValue !== null && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/70">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#F2EDE6] p-8 shadow-2xl">
            <p className="text-2xl font-bold text-[#1a1a1a]">Wrong! Find number {WINNING_VALUE}</p>
            <button
              className="cursor-pointer rounded-xl bg-[#E8654A] px-6 py-2 text-white font-medium hover:bg-[#d4573e] transition"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ScratchCardGame