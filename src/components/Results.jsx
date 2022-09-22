import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const {
    totalResultsCount,
    resultLoadTime,
    results,
    isLoading,
    getResults,
    searchTerm,
  } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <>
          <div className="flex flex-col justify-between space-y-0 w-full lg:mx-20 mt-2 px-2 lg:w-3/5">
            <div className="total_result_count text-gray-500 dark:text-gray-400 py-1 px-5">{`${totalResultsCount} Results (${(
              resultLoadTime / 10
            ).toFixed(2)} sec)`}</div>
            {results?.map(({ link, title, description }, index) => (
              <div key={index} className="w-full my-8 p-3 rounded">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {link.length > 30
                      ? `${link.substring(0, 30)}...`
                      : link.toString()}
                  </p>
                  <p className="text-lg  hover:underline dark:text-blue-400 text-blue-700 break-words">
                    {title}
                  </p>
                </a>
                <p className="break-words">{description}</p>
              </div>
            ))}
          </div>
        </>
      );

    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="sm:p-3 p-5"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="flex flex-col justify-between space-y-6 mt-5 sm:w-4/5 items-center">
          {results?.map(({ links, source, title }, index) => (
            <div key={index} className="md:w-4/5 w-full pt-2 pb-2 px-4">
              <a href={links?.[0].href} target="_blank" rel="noreferrer">
                <p className="text-sm hover:underline text-blue-700 dark:text-blue-400 break-words">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );

    case "/videos":
      return (
        <div className="flex flex-wrap justify-evenly pt-6">
          {results?.map((video, index) => (
            <div key={index} className="p-6">
              {video.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0]?.href}
                  controls
                  width="325px"
                  height="200px"
                />
              )}
              <div className="flex justify-between">
                <p className="w-80 break-words text-sm mt-2">
                  {video.additional_links?.[0]?.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return "ERROR... 404 Data Not Found";
  }
};

export default Results;
