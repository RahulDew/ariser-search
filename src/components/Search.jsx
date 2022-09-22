import React, { useEffect } from "react";
import { useResultContext } from "../context/ResultContextProvider";
import Links from "./Links";
import { MdCancel } from "react-icons/md";

const Search = () => {
  const { searchText, setSearchText } = useResultContext();
  const { setSearchTerm } = useResultContext();

  useEffect(() => {
    setSearchTerm(searchText);
  }, []);

  const searchFunction = () => {
    setSearchTerm(searchText);
  };

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <form
        className="resultPage_form w-full"
        onSubmit={(e) => {
          e.preventDefault();
          searchFunction();
        }}
      >
        <input
          value={searchText}
          type="text"
          className="sm:w-96 w-80 h-7 dark:bg-neutral-800 dark:text-white rounded-full shadow-md outline-none p-6 pr-12 pb-7 text-black hover:shadow-lg transition duration-300 ease-in-out"
          placeholder="Search or type"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>

      {searchText && (
        <button
          type="button"
          className="absolute top-4 right-4 text-lg text-gray-500"
          onClick={() => setSearchText("")}
        >
          <MdCancel />
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
