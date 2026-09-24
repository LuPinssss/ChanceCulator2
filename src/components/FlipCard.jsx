import { useState } from "react";

function FlipCard(){
    const [number] = useState(() => Math.floor(Math.random() * 10))
    const [flipped, setFlipped] = useState(false)
    return(
        <div className="flex bg-[#8B8589] min-h-screen justify-center items-center">
            <div className={`transition-transform ${flipped ? "[transform:rotateY(180deg)]":""} flex justify-center items-center w-80 h-100 rounded-lg bg-[#ADD8E6]`}
                onClick={() => setFlipped(!flipped)}>
                {flipped  && (
                <>
                    <div className="text-8xl [transform:rotateY(180deg)]">{number}</div>
                </>
                )}
                {!flipped  && (
                <>
                    <div className="flex justify-center items-center w-60 h-80 rounded-lg bg-[#0000CD]"></div>
                </>
                )}
            </div>
        </div>
    )
}

export default FlipCard