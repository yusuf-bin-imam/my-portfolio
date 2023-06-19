import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid purple" : "none",
    };
  };
  // for close dropdown after click
  const [isOpen, setOpen] = useState(false);

  const closeDropDown = () => {
    setOpen(false);
  };

  const navList = (
    <ul
      id="navlinks"
      className=" mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <NavLink
        to={"/"}
        style={navStyle}
        className="mr-5 font-bold text-black hover:text-green-800"
      >
        Home
      </NavLink>

      <NavLink
        style={navStyle}
        to={"/about"}
        className="mr-5 text-black font-bold hover:text-green-800"
      >
        About
      </NavLink>

      <NavLink
        style={navStyle}
        to={"/projects"}
        className="mr-5  text-black font-bold "
      >
        Projects
        {/* <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-white  w-52"
        >
          <li>
            <Link onClick={closeDropDown} to={"/"}>
              Personal Projects
            </Link>
          </li>
          <li>
            <Link onClick={closeDropDown} to={"/"}>
              Team Projects
            </Link>
          </li>
        </ul> */}
      </NavLink>

      <NavLink
        style={navStyle}
        to={"blogs"}
        className="mr-5 font-bold text-black hover:text-green-800 "
      >
        Blogs
      </NavLink>
    </ul>
  );

  return (
    <div className="">
      <Navbar className=" lg:block hidden     mx-auto w-full  h-24 border-none  py-2 px-4 lg:px-8 lg:py-4">
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
              <button className="rounded-full text-[#6E07F3] hover:text-white font-bold focus:border-none hover:border-none border-[#6E07F3] border hidden lg:inline-block py-3 px-12 hover:bg-[#6E07F3] ">
                Contact
              </button>
            </Link>
            {/* <Drakmode /> */}
          </div>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
