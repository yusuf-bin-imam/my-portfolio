import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      id="navlinks"
      className=" mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <NavLink
        to={"/"}
        className="mr-5 font-bold text-black hover:text-green-800"
      >
        Home
      </NavLink>

      <NavLink
        to={"/about"}
        className="mr-5 text-black font-bold hover:text-green-800"
      >
        About
      </NavLink>

      <NavLink
        to={"/project"}
        className="mr-5 text-black font-bold hover:text-green-800"
      >
        Projects
      </NavLink>

      <NavLink
        to={"blogs"}
        className="mr-5 font-bold text-black hover:text-green-800 "
      >
        Blogs
      </NavLink>
    </ul>
  );

  return (
    <div className="border-b-2 border-black">
      <Navbar className="mx-auto max-w-screen-xl  h-24 border-none  py-2 px-4 lg:px-8 lg:py-4">
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

          <Link id="title" to={"/contactDetails"}>
            <button className="rounded-full text-black font-bold focus:border-none border-black border hidden lg:inline-block py-3 px-12 hover:bg-purple-500 ">
              Contact
            </button>
          </Link>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 bg-black w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6  text-black w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="py-10  bg-[#c6c6c6]">
            {navList}

            <Link
              id="title"
              className="text-black font-bold"
              to={"/contactDetails"}
            >
              <button>Contact</button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
