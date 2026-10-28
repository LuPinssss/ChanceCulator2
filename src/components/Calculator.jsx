function Calculator({ display, onNumberOneClick }) {

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#E8E4DF]">
      <div className="flex flex-col gap-4 rounded-[2rem] bg-[#F2EDE6] p-6 w-80 shadow-2xl">

        <div className="flex items-end justify-end rounded-2xl bg-[#1a1a1a] h-24 px-5 overflow-hidden">
          <p className="text-white text-4xl font-light">{display}</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button className="rounded-2xl bg-[#C8C2BA] text-[#1a1a1a] text-xl py-4 font-medium">C</button>
          <button className="rounded-2xl bg-[#C8C2BA] text-[#1a1a1a] text-xl py-4 font-medium">%</button>
          <button className="rounded-2xl bg-[#C8C2BA] text-[#1a1a1a] text-xl py-4 font-medium">DEL</button>
          <button className="rounded-2xl bg-[#E8654A] text-white text-xl py-4 font-medium">÷</button>

          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">7</button>
          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">8</button>
          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">9</button>
          <button className="rounded-2xl bg-[#E8654A] text-white text-xl py-4 font-medium">×</button>

          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">4</button>
          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">5</button>
          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">6</button>
          <button className="rounded-2xl bg-[#E8654A] text-white text-xl py-4 font-medium">−</button>

          <button onClick={onNumberOneClick} className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">1</button>
          <button onClick={onNumberTwoClick} className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">2</button>          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">3</button>
          <button className="rounded-2xl bg-[#E8654A] text-white text-xl py-4 font-medium">+</button>

          <button className="col-span-2 rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">0</button>
          <button className="rounded-2xl bg-[#D9D3CB] text-[#1a1a1a] text-xl py-4 font-medium">.</button>
          <button className="rounded-2xl bg-[#5B8DEF] text-white text-xl py-4 font-medium">=</button>
        </div>

      </div>
    </div>
  )
}

export default Calculator