import React from "react";
import MainRoutes from "./Route/MainRoutes";
import Nav from "./components/NavBar/Nav";


const App = () => {
  return (
    <div className="relative">
      <Nav /> 
      <MainRoutes />
    </div>
  );
};

export default App;
