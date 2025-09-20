import React from "react";
import bg2 from "../../assets/Mars.mp4";

const Mars = () => {
  return (
    <div className="h-screen">
      <video className="absolute -top-50 left-180 object-cover scale-150 -z-10" autoPlay muted loop src={bg2}></video>
    </div>
  );
};

export default Mars;
