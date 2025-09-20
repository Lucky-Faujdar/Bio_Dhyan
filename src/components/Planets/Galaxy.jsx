import React from 'react'
import galaxy from "../../assets/Galaxy.mp4"

const Galaxy = () => {
  return (
     <div className="w-screen h-screen overflow-hidden">
          <video className="w-full" autoPlay muted loop  src={galaxy}></video>
        </div>
  )
}

export default Galaxy