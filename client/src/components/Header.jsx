import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="shadow-md bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-3xl">
            <span className="text-orange-400">Real</span>
            <span className="text-black">Estate</span>
          </h1>
        </Link>
        <form className="p-2 bg-slate-200 rounded-md flex items-center justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
          <BiSearchAlt2 />
        </form>
        <ul className="flex gap-3">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/signin">
            <li className="hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
