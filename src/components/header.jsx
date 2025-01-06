import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Header({ toggleDark, mode }) {
  return (
    <div className="flex fixed left-0 px-9 w-screen bg-white dark:bg-gray-700 z-20 shadow-sm justify-between items-center py-4 ">
      <div className="group z-10">
        <div className="rounded-full p-2 transition-all duration-100 w-fit hover:bg-gray-300">
          <FaBars size={"20px"} />
        </div>
        <ul className="hidden z-20 bg-white dark:bg-gray-900 absolute group-hover:block shadow rounded-lg text-sm p-3">
          <a href="#about">
            <li className="p-1">About me</li>
          </a>
          <a href="#education">
            <li className="p-1">Education</li>
          </a>
          <a href="#experience">
            <li className="p-1">Working experience</li>
          </a>
          <a href="#projects">
            <li className="p-1">Personal projects</li>
          </a>
          <a href="#languages">
            <li className="p-1">Languages</li>
          </a>
          <a href="#tools">
            <li className="p-1">Tools</li>
          </a>
        </ul>
      </div>

      <a href="#top">
        <p className="font-bold text-lg transition-all duration-100 hover:bg-gray-300 rounded-lg p-2">
          Michael's Portfolio
        </p>
      </a>

      <div
        onClick={() => toggleDark()}
        className="rounded-full p-2 transition-all duration-100 hover:bg-gray-300"
      >
        {mode === "light" ? (
          <MdOutlineLightMode size={"20px"} />
        ) : (
          <MdOutlineDarkMode size={"20px"} />
        )}
      </div>
    </div>
  );
}
