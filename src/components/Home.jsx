import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import Footer from "../components/Footer";

const Home = ({ darkTheme, setDarkTheme }) => {
  const { searchText, setSearchText } = useResultContext();
  const history = useHistory(); // initializing useHistory
  const searchFromHome = () => {
    history.push({ pathname: "/search", searchText });
  };
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-sky-50 text-black dark:bg-neutral-900 dark:text-white transition duration-300 ease-in-out">
        <nav className="flex justify-between items-center top-0 px-5 md:px-14 pt-2 text-black dark:text-white">
          <a
            href="#"
            className=" p-2 text-4xl font-bold text-sky-800  dark:text-sky-500 pacifico"
          >
            Ariser
          </a>
          <div className="flex justify-evenly bg-sky-200 dark:bg-gray-700/20 rounded-full shadow-lg">
            <button
              className="p-2 text-xl md:text-2xl"
              onClick={() => setDarkTheme(!darkTheme)}
            >
              {darkTheme ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
        <div className="flex flex-col justify-center	items-center text-center absolute top-1/2 -translate-y-1/2 w-full gap-5 pb-20">
          <div className="text-sky-800 dark:text-sky-500 text-8xl lg:text-9xl font-bold pacifico">
            Ariser
          </div>

          <form
            className="home_form w-screen"
            onSubmit={(e) => {
              e.preventDefault();
              searchFromHome();
            }}
          >
            <input
              type="text"
              placeholder="Search your results"
              className="bg-gray-50 dark:bg-gray-700/20 w-5/6 sm:w-4/6 md:w-4/6 lg:w-3/6 py-3 px-6 rounded-full border border-sky-500 dark:border-sky-500/75 border-solid shadow-lg outline-0 transition duration-300 ease-in-out"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </form>

          <div className="bg-sky-100 dark:bg-gray-700/20 px-4 py-2 rounded-3xl text-lg transition duration-300 ease-in-out">
            Keep Exploring !!!
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
