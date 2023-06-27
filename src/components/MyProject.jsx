import React from "react";
import smartzone from "../../src/image/smartzone.png";
import skillshare from "../../src/image/skillshare.png";
import quiz from "../../src/image/quiz.jpg";
import plumboy from "../../src/image/plumboy.png";
const MyProject = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      <div className="mt-10">
        <h3 id="title" className="text-3xl text-black font-bold ">
          My Recent <span className="text-red-700"> work</span>
        </h3>{" "}
        <p id="text" className="font-bold  text-black text-xl mt-3">
          Here is a list of the projects that I've worked on.
        </p>
      </div>
      <section className="text-gray-600 hidden lg:block body-font overflow-hidden">
        <div id="container">
          <div id="content">
            <div id="screen">
              <img
                alt="ecommerce"
                className="lg:w-full w-full  lg:h-[760px] h-64 object-cover object-center rounded"
                src="https://www.linkpicture.com/q/screencapture-plumboy-37ca4-web-app-2023-01-12-16_30_52.png"
              />
            </div>
          </div>
        </div>
        <div className="container -mt-36  px-5 py-24 mx-auto">
          <div className="lg:w-full mx-auto ">
            <div className=" w-full mx-auto lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className=" px-20 ">
                <h1
                  id="title"
                  className="text-gray-900 text-3xl title-font font-bold mb-1"
                >
                  Plumboy
                </h1>

                <p id="text" className="font-bold">
                  The best plumbing service for your residence or business
                </p>
              </div>

              <div>
                <a href="https://plumboy-37ca4.web.app/">
                  <button
                    id="title"
                    className="  mt-3 transition-all hover:scale-110 text-white bg-[#6E07F3]  py-3 px-10 border border-black focus:outline  rounded"
                  >
                    Live_View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid m-5 lg:grid-cols-2 gap-5 ">
        <div className="lg:hidden sm:block">
          <a
            data-aos="fade-up"
            data-aos-duration="1500"
            href="#"
            className="group relative rounded-xl block bg-black"
          >
            <img
              alt="Developer"
              src={plumboy}
              className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-75 transition-opacity group-hover:opacity-0"
            />

            <div className="relative p-8 ">
              <div className="mt-48 rounded-xl">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0  group-hover:opacity-100">
                  <p className="text-2xl font-bold text-white">Plumboy</p>
                  <p className="text-md text-white">Best plumbing service</p>
                  <button
                    id="title"
                    className="px-10 py-3 bg-yellow-500 text-black rounded-md font-bold mt-2"
                  >
                    <a href="https://plumboy-37ca4.web.app/">Live_View</a>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            data-aos="fade-up"
            data-aos-duration="1500"
            href="https://smartzone-bb172.web.app/"
            className="group relative rounded-xl block bg-black"
          >
            <img
              alt="Developer"
              src={smartzone}
              className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-75 transition-opacity group-hover:opacity-0"
            />

            <div className="relative p-8">
              <div className="mt-48 rounded-xl">
                <div className="translate-y-8 transform  opacity-0 transition-all  group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-white">SmartZone</p>
                  <p className="text-md text-white">A complete tech house</p>
                  <button
                    id="title"
                    className="px-10  py-3 bg-cyan-500 text-black rounded-md font-bold mt-2"
                  >
                    Live_View
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            data-aos="fade-up"
            data-aos-duration="1500"
            href="#"
            className="group relative rounded-xl block bg-black"
          >
            <img
              alt="Developer"
              src={quiz}
              className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-75 transition-opacity group-hover:opacity-0"
            />

            <div className="relative p-8">
              <div className="mt-48 rounded-xl">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-white">Codecademy</p>
                  <p className="text-md text-white">
                    Unlocking knowledge at the speed of thought.
                  </p>
                  <button
                    id="title"
                    className="px-10 py-3 bg-yellow-500 text-black rounded-md font-bold mt-2"
                  >
                    <a href="https://quiz-crackhers-assignments.netlify.app/">
                      Live_View
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            data-aos="fade-up"
            data-aos-duration="1500"
            href="https://skillshare-authentication.web.app/"
            className="group relative rounded-xl block bg-black"
          >
            <img
              alt="Developer"
              src={skillshare}
              className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-75 transition-opacity group-hover:opacity-0"
            />

            <div className="relative  p-8">
              <div className="mt-48 rounded-xl">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-2xl font-bold text-white">Skill_Share</p>
                  <p className="text-md text-white">Find your next course.</p>
                  <button
                    id="title"
                    className="px-10 py-3 bg-purple-500 text-black rounded-md font-bold mt-2"
                  >
                    Live_View
                  </button>
                </div>
              </div>
            </div>
          </a>{" "}
        </div>
      </section>{" "}
      <a href="https://github.com/RedEye75">
        <button
          data-aos="fade-left"
          id="title"
          className="bg-[#5E08F4] mx-auto text-white transition-all hover:scale-110 font-bold py-3 px-10 rounded border border-black "
        >
          See More{" "}
        </button>
      </a>
    </div>
  );
};

export default MyProject;
