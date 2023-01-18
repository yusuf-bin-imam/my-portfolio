import React from "react";

import { Link, NavLink } from "react-router-dom";
import MobileNavs from "../../src/";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { SiPolymerproject } from "react-icons/si";
import { BiMessageEdit } from "react-icons/bi";

const MobileHeader = () => {
  return (
    <div className="lg:hidden">
      <ol className="navigation">
        <NavLink
          to={"/"}
          className="moblinks transition hover:translate-x-2 hover:translate-y-2"
        >
          <AiOutlineHome />
        </NavLink>
        <NavLink
          to={"/blogs"}
          className="moblinks transition hover:translate-x-2 hover:translate-y-2"
        >
          <BsBook />{" "}
        </NavLink>
        <NavLink
          to={"/project"}
          className="moblinks  transition hover:translate-x-2 hover:translate-y-2"
        >
          <SiPolymerproject />
        </NavLink>
        <NavLink
          to={"/contact"}
          className="moblinks transition hover:translate-x-2 hover:translate-y-2"
        >
          <BiMessageEdit className="" />
        </NavLink>
      </ol>
    </div>
  );
};

export default MobileHeader;
