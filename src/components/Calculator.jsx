function Calculator() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-[#8B8589]">
      <div className="flex flex-col gap-4 rounded-2xl bg-[#2B2B2B] p-6 w-80">
        
        <div className="flex items-end justify-end rounded-lg bg-[#1a1a1a] h-24 px-4">
          <p className="text-white text-4xl">0</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button className="rounded-lg bg-[#4a4a4a] text-white text-xl py-4">C</button>
          <button className="rounded-lg bg-[#4a4a4a] text-white text-xl py-4">%</button>
          <button className="rounded-lg bg-[#4a4a4a] text-white text-xl py-4">DEL</button>
          <button className="rounded-lg bg-[#0000CD] text-white text-xl py-4">÷</button>

          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">7</button>
          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">8</button>
          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">9</button>
          <button className="rounded-lg bg-[#0000CD] text-white text-xl py-4">×</button>

          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">4</button>
          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">5</button>
          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">6</button>
          <button className="rounded-lg bg-[#0000CD] text-white text-xl py-4">−</button>

          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">1</button>
          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">2</button>
          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">3</button>
          <button className="rounded-lg bg-[#0000CD] text-white text-xl py-4">+</button>

          <button className="col-span-2 rounded-lg bg-[#3a3a3a] text-white text-xl py-4">0</button>
          <button className="rounded-lg bg-[#3a3a3a] text-white text-xl py-4">.</button>
          <button className="rounded-lg bg-[#ADD8E6] text-black text-xl py-4">=</button>
        </div>

      </div>
    </div>
  )
}

export default Calculator