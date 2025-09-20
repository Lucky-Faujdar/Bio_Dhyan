import React from "react";
import bgvdo from '../../assets/Neptune.mp4'

const Neptune = () => {
  return (
    <div >
      <video className="w-full" autoPlay muted loop src={bgvdo}></video>
    </div>
  );
};

export default Neptune;
