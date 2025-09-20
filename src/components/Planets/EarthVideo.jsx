import React from "react";
import bgvdo from "../../assets/earth.mp4";

const EarthVideo = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <video className="w-full" autoPlay muted loop src={bgvdo}></video>
    </div>
  );
};

export default EarthVideo;
