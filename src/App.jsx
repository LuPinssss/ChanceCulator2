import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import FlipCard from  './components/FlipCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlipCard></FlipCard>
    </>
  )
}

export default App
