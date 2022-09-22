import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Results from "./Results";

const ResultPage = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-neutral-900 bg-sky-50 dark:text-white black flex flex-col min-h-screen transition duration-300 ease-in-out">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Results />
        <Footer />
      </div>
    </div>
  );
};

export default ResultPage;
