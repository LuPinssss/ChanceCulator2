import { useState } from "react";

function FlipCard({ value, isFlipped, onClick }){
    return(
        <div className={`transition-transform ${isFlipped? "[transform:rotateY(180deg)]":""} flex justify-center items-center w-40 h-60 rounded-lg bg-[#ADD8E6]`}
            onClick={onClick}>
            {isFlipped  && (
            <>
                <div className="text-8xl [transform:rotateY(180deg)]">{value}</div>
            </>
            )}
            {!isFlipped  && (
            <>
                <div className="flex justify-center items-center w-30 h-50 rounded-lg bg-[#0000CD]"></div>
            </>
            )}
        </div>
    )
}

export default FlipCard