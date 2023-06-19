import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import About from "./About";
import Contact from "./Contact";
import Image from "./Image";
import MyProject from "./MyProject";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  return (
    <div className="min-h-screen mt-14">
      <section
        data-aos="fade-left"
        data-aos-duration="1500"
        className=" bg-white  text-white"
      >
        <img
          src="https://www.linkpicture.com/q/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail-removebg-preview-1.png"
          alt=""
          className="w-48 mx-auto"
        />
        <h1 id="title" className="text-md mt-3  font-bold text-black">
          Hello I'm
        </h1>
        <div className="mx-auto  px-4  lg:flex  lg:items-center">
          <div className="mx-auto   max-w-3xl text-center">
            <h1
              id="title"
              className="bg-clip-text mx-auto  text-black text-3xl font-extrabold  sm:text-5xl "
            >
              Yusuf Bin Imam <br />
              <p className="text-lg  flex items-center justify-center">
                <span className="mr-2">Mern Stack </span>
                <span>
                  <Typical
                    loop={Infinity}
                    wrapper="h2"
                    steps={["developer", 3000]}
                  />
                </span>
              </p>
            </h1>{" "}
            <p
              id="text"
              className="mx-auto mt-4 font-bold max-w-xl text-gray-800
              sm:text-xl sm:leading-relaxed"
            >
              I adore creating things from scratch in code and seeing my
              creations come to life in the browser.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                id="text"
                className="px-10 py-3 flex bg-yellow-500 rounded-md border border-black text-black font-bold"
                href="Yusuf-Resume.pdf"
                download
              >
                Resume
                <BsDownload className="mt-1 font-bold text-md ml-2" />
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
