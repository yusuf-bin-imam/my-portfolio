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
        <NavLink to={"/"} className="moblinks  hover:bg-[#03bdec]">
          <AiOutlineHome />
        </NavLink>
        <NavLink to={"/blogs"} className="moblinks  hover:bg-[#03bdec]">
          <BsBook />{" "}
        </NavLink>
        <NavLink to={"/project"} className="moblinks  hover:bg-[#03bdec]">
          <SiPolymerproject />
        </NavLink>
        <NavLink to={"/contact"} className="moblinks  hover:bg-[#03bdec]">
          <BiMessageEdit />
        </NavLink>
      </ol>
    </div>
  );
};

export default MobileHeader;
