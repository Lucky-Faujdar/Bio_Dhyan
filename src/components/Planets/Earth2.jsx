import React from "react";
import bgvdo from "../../assets/Earth2.mp4";

const Earth2 = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <video className="w-full" autoPlay muted loop src={bgvdo}></video>
    </div>
  );
};

export default Earth2;
