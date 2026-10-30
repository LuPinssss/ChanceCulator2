import { useRef, useEffect } from "react"
import Reel from "./Reel"

function SlotMachine(){
    return (
      <div className="flex min-h-screen justify-center items-center bg-[#15151f]">
        <div className="flex gap-5">
            <Reel/>
            <Reel/>
            <Reel/>
        </div>
      </div>
    )
}

export default SlotMachine