import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import About from "./About";
import Contact from "./Contact";
import Image from "./Image";
import { BsDownload } from "react-icons/bs";
import hero from "../../src/image/hero3.jpg";
import MySkills from "./MySkills/MySkills";
// import hero from "../../src/image/hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section
        data-aos="fade-left"
        data-aos-duration="1500"
        className=" bg-white  text-white"
      >
        <img src={hero} alt="developerImage" className="w-80 mx-auto" />
        <h1 id="title" className="text-md -mt-7  font-bold text-black">
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
                id="title"
                className="px-10 py-3 flex bg-[#5be9b9]  border border-[#5be9b9] text-black font-bold"
                href="yusufResume.pdf"
                download
              >
                Resume
                <BsDownload className="mt-1 font-bold text-md ml-2" />
              </a>

              <Link
                id="title"
                to={"/contact"}
                className=" px-10 py-3 bg-[#6E07F3]  border border-[#6E07F3] text-white font-bold"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Image />
      <About />
      <MySkills />
      <Contact />
    </div>
  );
};
export default Home;
