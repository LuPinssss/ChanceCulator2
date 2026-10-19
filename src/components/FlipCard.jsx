function FlipCard({ value, isFlipped, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className="w-40 h-60 cursor-pointer [perspective:1000px]"
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* back of the card (shown when not flipped) */}
          <div className="absolute inset-0 flex justify-center items-center rounded-2xl bg-[#1a1a2E] shadow-lg [backface-visibility:hidden] overflow-hidden">
            {/* decorative circles */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#E8654A]/30"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-[#5B8DEF]/30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#F2EDE6]/10"></div>

            {/* inner pattern grid */}
            <div className="w-[7.5rem] h-[8.5rem] rounded-xl border-2 border-dashed border-[#F2EDE6]/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#E8654A]"></div>
            </div>
          </div>

          {/* front of the card (shown when flipped) */}
          <div className="absolute inset-0 flex justify-center items-center rounded-2xl bg-[#F2EDE6] shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="text-8xl font-light text-[#1a1a1a]">{value}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlipCard