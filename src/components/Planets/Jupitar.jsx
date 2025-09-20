import React from "react";
import jupiter from "../../assets/Jupiter.mp4"

const Jupitar = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <video className="w-full" autoPlay muted loop  src={jupiter}></video>
    </div>
  );
};

export default Jupitar;
