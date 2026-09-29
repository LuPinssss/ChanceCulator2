import { useState, useEffect } from 'react'
import FlipCard from './FlipCard.jsx'

const CARD_NUMBERS = [1,1,2,2,3,3,4,4,5,5]
const FLIP_BACK_DELAY = 700

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
    <div className="relative flex min-h-screen justify-center items-center bg-[#8B8589]">
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
        <div className="absolute inset-0 flex justify-center items-center bg-black/50">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-8">
            <p className="text-2xl font-bold">You found the 1s!</p>
            <button
              className="cursor-pointer rounded-lg bg-[#0000CD] px-6 py-2 text-white"
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