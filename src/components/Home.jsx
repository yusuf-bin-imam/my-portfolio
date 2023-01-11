import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Image from "./Image";

const Home = () => {
  return (
    <div>
      <section className=" bg-[#ffffff] text-white">
        <div className="mx-auto  px-4  lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-medium" id="name">
              Hello..! I am
            </h1>
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl ">
              Yusuf Bin Imam <br />
              <span className="sm:block "> Mern stack developer</span>
            </h1>

            <p
              id="text"
              className="mx-auto mt-4 font-bold max-w-xl text-gray-800
              sm:text-xl sm:leading-relaxed"
            >
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://drive.google.com/file/d/1WAdTsZ8UrHGxjqIU8E2-VuezzIBcx4aH/view?usp=share_link">
                {" "}
                <button className="rounded py-3 px-12 bg-gradient-to-r from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 text-white  font-semibold">
                  Resume
                </button>
              </a>

              <Link
                to={"/contact"}
                className="rounded py-3 px-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-red-800 hover:to-black text-white  font-semibold"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Image />
      <About />
      <Contact />
    </div>
  );
};
export default Home;
