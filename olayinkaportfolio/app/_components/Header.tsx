import React from "react";
import { ModeToggle } from "./togglemode";

const Header = () => {
  return (
    <nav className="fixed  w-full flex items-center justify-between flex-wrap  mt-2 p-6  mx-auto">
      <h1 className="frijole-text font-extrabold text-5xl">AJ</h1>
      <div className="flex items-center justify-between w-full md:w-auto">
        <ul className="flex  space-x-4">
          <li className="frijole-text text-2xl">
            <a href="#about" className=" hover:text-gray-900">
              About
            </a>
          </li>
          <li className="frijole-text text-2xl">
            <a href="#projects" className=" hover:text-gray-900">
              Projects
            </a>
          </li>
          <li className="frijole-text text-2xl">
            <a href="#contact" className=" hover:text-gray-900">
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
