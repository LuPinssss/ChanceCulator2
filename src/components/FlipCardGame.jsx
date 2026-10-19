import { useState, useEffect } from 'react'
import FlipCard from './FlipCard.jsx'

const CARD_NUMBERS = [1,1,2,2,3,3,4,4,5,5]
const FLIP_BACK_DELAY = 700
const DECOY_MATCH_DELAY = 400
const WINNING_VALUE = 1

function shuffle(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function FlipCardGame() {
  const [shuffledNumbers, setShuffledNumbers] = useState(() => shuffle(CARD_NUMBERS))
  const [flippedIndexes, setFlippedIndexes] = useState([])
  const [matchedIndexes, setMatchedIndexes] = useState([])
  const [hasWon, setHasWon] = useState(false)

  function handleCardClick(index) {
    if (flippedIndexes.length === 2) return
    if (flippedIndexes.includes(index) || matchedIndexes.includes(index)) return
    setFlippedIndexes(prev => [...prev, index])
}
  useEffect(() => {
    if (flippedIndexes.length !== 2) return

    const [first, second] = flippedIndexes
    const firstValue = shuffledNumbers[first]
    const secondValue = shuffledNumbers[second]

    const isPair = firstValue === secondValue
    const isTheOnePair = isPair && firstValue === WINNING_VALUE

    if (isTheOnePair) {
      setMatchedIndexes(prev => [...prev, first, second])
      setFlippedIndexes([])
      setHasWon(true)
      return
    }

    const delay = isPair ? DECOY_MATCH_DELAY : FLIP_BACK_DELAY
    const timerId = setTimeout(() => setFlippedIndexes([]), delay)

    return () => clearTimeout(timerId)
  }, [flippedIndexes, shuffledNumbers])

  function handleContinue() {
    setShuffledNumbers(shuffle(CARD_NUMBERS))
    setFlippedIndexes([])
    setMatchedIndexes([])
    setHasWon(false)
  }

  return (
    <div className="relative flex min-h-screen justify-center items-center bg-[#15151f]">
      <div className="grid grid-cols-5 gap-5">
        {shuffledNumbers.map((num, index) => (
          <FlipCard
            key={index}
            value={num}
            isFlipped={flippedIndexes.includes(index) || matchedIndexes.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {hasWon && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/70">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#F2EDE6] p-8 shadow-2xl">
            <p className="text-2xl font-bold text-[#1a1a1a]">You found the 1s!</p>
            <button
              className="cursor-pointer rounded-xl bg-[#E8654A] px-6 py-2 text-white font-medium hover:bg-[#d4573e] transition"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FlipCardGame