import { useRef, useEffect } from "react"

const REVEAL_THRESHOLD = 0.5

function ScratchCard({ value, onReveal }) {
  const canvasRef = useRef(null)
  const isRevealedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = "#9a9a9a"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  function scratch(x, y) {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 20, 0, Math.PI * 2)
    ctx.fill()

    checkScratchedPercent()
  }

  function checkScratchedPercent() {
    if (isRevealedRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data

    let clearedCount = 0
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) clearedCount++
    }

    const totalPixels = pixels.length / 4
    const percentCleared = clearedCount / totalPixels

    if (percentCleared >= REVEAL_THRESHOLD) {
      isRevealedRef.current = true
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      onReveal(value)
    }
  }

  function handleMouseMove(e) {
    if (e.buttons !== 1) return
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    scratch(x, y)
  }

  return (
    <div className="relative w-40 h-60 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center bg-[#F2EDE6] text-8xl font-light text-[#1a1a1a]">
        {value}
      </div>
      <canvas
        ref={canvasRef}
        width={160}
        height={240}
        className="absolute inset-0 cursor-pointer"
        onMouseMove={handleMouseMove}
      />
    </div>
  )
}

export default ScratchCard