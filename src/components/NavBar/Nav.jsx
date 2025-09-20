import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/galaxy.png";

const Nav = () => {
  return (
    <div className="absolute top-0 w-full z-50 h-17 text-white flex items-center px-8 py-4 justify-between shadow-xl bg-opacity-0 bg-gradient-to-br backdrop-filter backdrop-blur-sm border-b-zinc-700 border-b-1 font-[font1] text-lg  tracking-wide">
      <div id="logo" className="w-10 text-white">
        <img src={logo} alt="" />
      </div>
      <div>
      <NavLink className={" rounded-sm px-4 py-2 "} to="/" >About</NavLink>
      <NavLink className={" rounded-sm px-4 py-2 "} to="/" >Technology</NavLink>
      <NavLink className={" rounded-sm px-4 py-2 "} to="/galaxy" >Galaxy</NavLink>

      </div>
      <div className="flex gap-10 bg-red-950 border-1 border-white rounded-xl px-4 py-2   ">
      <NavLink  to="/login" >LOGIN</NavLink>
      </div>
    </div>
  );
};

export default Nav;
