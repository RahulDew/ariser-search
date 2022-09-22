import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const [totalResultsCount, setTotalResultsCount] = useState("");
  const [resultLoadTime, setResultLoadTime] = useState("");

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    });

    const data = await response.json();

    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/image")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
      setTotalResultsCount(data.total);
      setResultLoadTime(data.ts);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        searchText,
        setSearchText,
        getResults,
        totalResultsCount,
        resultLoadTime,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
