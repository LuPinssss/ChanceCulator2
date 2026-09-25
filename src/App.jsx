import { useState } from 'react'
import FlipCard from  './components/FlipCard.jsx'

function App() {
  const cardNumbers = [1,1,2,2,3,3,4,4,5,5]
  const [shuffledNumbers] = useState(() => shuffle(cardNumbers))
  const [flippedIndexes, setFlippedIndexes] = useState([])
  function handleCardClick(index) {
    setFlippedIndexes([...flippedIndexes, index])
  }
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  return (
    <div className="flex min-h-screen justify-center items-center bg-[#8B8589]">
      <div className="grid grid-cols-5 gap-5">
        {shuffledNumbers.map((num, index) => (
          <FlipCard key={index} value={num} isFlipped={flippedIndexes.includes(index)} onClick={() => handleCardClick(index)}/>
        ))}
      </div>
    </div>
  )
}

export default App
