import React from "react";
import { ModeToggle } from "./togglemode";
import { Sidebar } from "./sidebar";

const Header = () => {
  return (
    <nav className=" fixed top-0  w-full flex items-center justify-between flex-wrap   p-6  mx-auto">
      <div>
        <h1 className="frijole-text font-extrabold text-5xl">{`  <AJ />`}</h1>
      </div>
      <div className="md:hidden flex items-center justify-between w-full md:w-auto">
        <Sidebar />
      </div>
      <div className=" hidden md:flex items-center  justify-between w-full md:w-auto">
        <ul className="flex  space-x-4">
          <li className="frijole-text  text-2xl">
            <a href="#about" className=" cursor-pointer hover:text-gray-200">
              About
            </a>
          </li>
          <li className="frijole-text text-2xl">
            <a href="#projects" className="  hover:text-gray-200">
              Projects
            </a>
          </li>
          <li className="frijole-text text-2xl">
            <a href="#contact" className=" hover:text-gray-200">
              Contact
            </a>
          </li>
          <li className="frijole-text text-2xl">
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
