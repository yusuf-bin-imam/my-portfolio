import React from "react";
import smartzone from "../../src/image/smartzoneMain.png";
import edumate from "../../src/image/edumate.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import plumboy from "../../src/image/plumboyyy.png";
import MoreProjects from "./MoreProjects";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <h1 id="title" className="font-bold   text-black text-4xl">
        Some things i've build
      </h1>
      <div className="space-y-28">
        <div className="mt-20 text-black grid max-w-screen-lg mx-auto  grid-cols-1 lg:grid-cols-2">
          <img
            className="w-96 lg:w-full mx-auto lg:m-0"
            src={smartzone}
            alt=""
          />
          <div>
            <div>
              <h1
                id="title"
                className="text-4xl lg:text-end text-center font-bold text-black"
              >
                Smartzone
              </h1>
              <p className="text-md font-semibold lg:text-end text-center text-black">
                A second-hand mobile reselling website.
              </p>
            </div>
            <div className="bg-gray-800 text-gray-300 mt-5 lg:m-0 m-5 p-5">
              <p className="text-start">
                The objective of Smartzone is to provide a platform for
                individuals to sell their used mobile devices to potential
                buyers. It aims to facilitate the exchange of pre-owned phones
                by creating a convenient and reliable marketplace.
              </p>
            </div>
            <div className="flex justify-around">
              <p className="font-bold mt-1  text-start ml-5 lg:ml-0">
                React I Firebase I Render I Express I NodeJS I MongoDB
              </p>
              <div className="flex mt-2 ml-5 gap-5">
                <a
                  className="tooltip"
                  data-tip="Client Repo"
                  href="https://github.com/yusuf-bin-imam/SmartZone-client"
                >
                  <FiGithub />
                </a>
                <a
                  className="tooltip"
                  data-tip="Server Repo"
                  href="https://github.com/yusuf-bin-imam/SmartZone-Server"
                >
                  <FiGithub />
                </a>
                <a
                  className="tooltip"
                  data-tip="Live Link"
                  href="https://smartzone-bb172.web.app/"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-black grid max-w-screen-lg mx-auto grid-cols-1 lg:grid-cols-2">
          <img
            className="h-[270px] block lg:hidden mt-[3px] w-96 lg:w-full mx-auto lg:m-0"
            src={edumate}
            alt=""
          />
          <div>
            <div className="text-start">
              <h1
                id="title"
                className="text-4xl font-bold lg:text-start text-center text-black"
              >
                Edumate
              </h1>
              <p className="text-md lg:text-start text-center font-semibold text-black">
                A web platform that offers tutors online. | Team Project
              </p>
            </div>
            <div className="bg-gray-800 text-gray-300  m-5 mt-5  p-5">
              <p className="text-start">
                Edumate connects students with specialized tutors in various
                subjects, offering a convenient and effective solution for
                academic support. It provides access to qualified teachers,
                enabling students to receive the assistance they need to achieve
                their academic goals.
              </p>
            </div>
            <div className="flex justify-around">
              <p className="font-bold m-5 lg:mt-1 -mt-3  text-start">
                React I Firebase I vercel I Express I NodeJS I MongoDB
              </p>
              <div className="flex lg:mt-2 -mt-1 ml-5 gap-5">
                <a
                  className="tooltip"
                  data-tip="Client Repo"
                  href="https://github.com/Team-API-Avengers/Edumate-Client"
                >
                  <FiGithub />
                </a>
                <a
                  className="tooltip"
                  data-tip="Server Repo"
                  href="https://github.com/Team-API-Avengers/Edumate-Server"
                >
                  <FiGithub />
                </a>
                <a
                  className="tooltip"
                  data-tip="Live Link"
                  href="https://edumate-6007c.web.app/"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
          <img
            className="h-[270px] lg:block hidden mt-[3px] w-96 lg:w-full mx-auto lg:m-0"
            src={edumate}
            alt=""
          />
        </div>
        <div className="mt-20 text-black grid max-w-screen-lg mx-auto grid-cols-1 lg:grid-cols-2">
          <img className="w-96 lg:w-full mx-auto lg:m-0" src={plumboy} alt="" />
          <div>
            <div>
              <h1
                id="title"
                className="text-4xl lg:text-end text-center font-bold text-black"
              >
                plumboy
              </h1>
              <p className="text-md font-semibold lg:text-end text-center text-black">
                A web for best plumbing service.
              </p>
            </div>
            <div className="bg-gray-800 text-gray-300 mt-5 lg:m-0 m-5 p-5">
              <p className="text-start">
                Plumboy is a plumbing service website that connects customers
                with skilled plumbers, simplifying the process of finding and
                booking reliable plumbing services.
              </p>
            </div>
            <div className="flex justify-around">
              <p className="font-bold ml-5 lg:ml-0 mt-1  text-start">
                React I Firebase I Vercel I Express I NodeJS I MongoDB
              </p>
              <div className="flex mt-2 ml-5 gap-5">
                <a
                  className="tooltip"
                  data-tip="Client Repo"
                  href="https://github.com/yusuf-bin-imam/plumboy-client"
                >
                  <FiGithub />
                </a>
                <a
                  className="tooltip"
                  data-tip="Server Repo"
                  href="https://github.com/yusuf-bin-imam/plumboy-server"
                >
                  <FiGithub />
                </a>
                <a
                  className="tooltip"
                  data-tip="Live Link"
                  href="https://plumboy-37ca4.web.app/"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreProjects />
    </div>
  );
};

export default Projects;
