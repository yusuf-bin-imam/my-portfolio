import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import fb from "../../src/image/facebook.png";
import linkedin from "../../src/image/linkedin.png";
import github from "../../src/image/github.png";

const Header = () => {
  const navStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid purple" : "none",
    };
  };

  const navList = (
    <ul
      id="navlinks"
      className=" mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <NavLink to={"/"} style={navStyle} className="mr-5 font-bold text-black ">
        Home
      </NavLink>

      <NavLink
        style={navStyle}
        to={"/about"}
        className="mr-5 text-black font-bold "
      >
        About
      </NavLink>

      <NavLink
        style={navStyle}
        to={"/projects"}
        className="mr-5  text-black font-bold "
      >
        Projects
      </NavLink>

      <NavLink
        style={navStyle}
        to={"blogs"}
        className="mr-5 font-bold text-black  "
      >
        Blogs
      </NavLink>
      <div className="flex gap-4">
        <a
          className="w-9 hover:transform hover:scale-125 transition-all"
          href="https://github.com/yusuf-bin-imam"
        >
          <img src={github} alt="github" />
        </a>
        <a
          className="w-9  hover:transform hover:scale-125 transition-all"
          href="https://web.facebook.com/profile.php?id=100032670966425"
        >
          <img src={fb} alt="Facebook" />
        </a>
        <a
          className="w-9 hover:transform hover:scale-125 transition-all"
          href="https://www.linkedin.com/in/yusuf-bin-imam/"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </ul>
  );

  return (
    <Navbar className=" lg:block hidden sticky top-0 z-50 shadow-b shadow-lg   mx-auto w-full rounded-none h-24 border-none  py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to={"/"}>
            <span
              id="name"
              className="font-serif text-5xl text-[#6E07F3]  font-extrabold"
            >
              Yusuf
            </span>
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <div className="flex justify-between">
          <Link id="title" to={"/contactDetails"}>
            <button className="rounded-full transition-all ease-in-out duration-700 text-[#6E07F3] hover:text-white font-bold  border-[#6E07F3] border hidden lg:inline-block py-3 px-12 hover:bg-[#6E07F3] ">
              Let's talk
            </button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
};
export default Header;
