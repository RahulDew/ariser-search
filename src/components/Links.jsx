import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdSearch,
  MdOutlineImage,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { BiNews } from "react-icons/bi";

const links = [
  { url: "/search", text: "All", icon: <MdSearch /> },
  { url: "/image", text: "Images", icon: <MdOutlineImage /> },
  { url: "/news", text: "News", icon: <BiNews /> },
  { url: "/videos", text: "Videos", icon: <MdOutlineVideoLibrary /> },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text, icon }, index) => (
        <NavLink
          to={url}
          key={index}
          className=" mb-0 pr-1 text-sm sm:text-base flex flex-row"
          activeClassName="border-b-2 text-sky-700 border-sky-700 dark:text-sky-400 dark:border-sky-400 pb-1"
        >
          <p className="p-1">{icon}</p>
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
