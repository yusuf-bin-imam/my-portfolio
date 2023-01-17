import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import About from "./About";
import Contact from "./Contact";
import Image from "./Image";
import MyProject from "./MyProject";

const Home = () => {
  return (
    <div>
      <section className=" bg-black text-white">
        <div className="mx-auto  px-4  lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-start">
            <h1 className="text-5xl text-black font-medium">Hello..! I am</h1>
            <h1 className="bg-clip-text text-3xl font-extrabold  sm:text-5xl ">
              Yusuf Bin Imam <br />
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  "mern stack developer",
                  2000,
                  "Reactjs developer",
                  3000,
                ]}
              />
              <span className="sm:block "> </span>
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
                <button
                  id="text"
                  className="px-10 py-3 bg-yellow-500 rounded-md border border-black text-black font-bold"
                >
                  Resume
                </button>
              </a>

              <Link
                id="text"
                to={"/contact"}
                className=" px-10 py-3 bg-[#6E07F3] rounded-md border border-black text-white font-bold"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Image />
      <About />

      <MyProject />
      <Contact />
    </div>
  );
};
export default Home;
