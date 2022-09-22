import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="pb-1 px-5 md:px-14 pt-2 flex flex-wrap justify-center  sm:justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center space-x-4 w-screen">
        <Link to="/">
          <p className="p-2 text-4xl font-bold text-sky-800  dark:text-sky-500 pacifico">
            Ariser
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl md:text-2xl text-gray-900 dark bg-sky-200 dark:text-gray-100 dark:bg-neutral-600/20 rounded-full p-2 shadow-lg"
        >
          {darkTheme ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
