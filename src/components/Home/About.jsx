import React from "react";
import aboutImage from "../../../src/assets/image/about.png";
import { Award, Briefcase, Calendar, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#6E07F3] py-28 -mt-[.5]">
      <div className="mt-10 max-w-screen-lg mx-auto ">
        <div
          className=" mt-10 grid grid-cols-1
        lg:grid-cols-2"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mx-auto"
          >
            <img
              className="w-72 mx-auto ml-10 mb-5 lg:mb-32"
              src={aboutImage}
              alt=""
            />
          </div>
          <div
            id="title"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:mt-1 mx-auto"
          >
            <h2 className="text-4xl -ml-1 mb-3 mt-4 text-white lg:text-start font-bold">
              Hi there..! I’m <span className="">Yusuf</span> <br />
              Nice to meet you.
            </h2>
            <p className="text-gray-200 lg:text-start lg:p-0  p-5 font-medium text-xl">
              I'm a junior Mern Stack Developer. I've been working in this
              industry for a year. I've created some projects at this time for
              educational purposes.Here are a full-stack also. My objective is
              to make a career as a web developer. I am consistently giving this
              place my all in an effort to achieve my aim.
            </p>

            {/* education  */}
            <div className="grid text-gray-200 grid-cols-1 mt-10 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-blue-100 text-blue-700 rounded-md">
                  <Award size={20} />
                </div>
                <div className="font-bold text-start ">
                  <h4 className="">Experience</h4>
                  <p className="text-sm text-orange-300">3+ Years</p>
                </div>
              </div>
              <div className="flex font-bold items-start">
                <div className="mr-3 p-2 bg-purple-100 text-purple-700 rounded-md">
                  <Briefcase size={20} />
                </div>
                <div className="text-start font-bold ">
                  <h4 className="">Projects</h4>
                  <p className="text-start text-sm text-orange-300">
                    10+ Completed
                  </p>
                </div>
              </div>
              <div className="flex font-bold items-start">
                <div className="mr-3 p-2 bg-green-100 text-green-700 rounded-md">
                  <GraduationCap size={20} />
                </div>
                <div className="text-start font-bold">
                  <h4 className="text-start ">Education</h4>
                  <p className="text-start text-[14px] text-orange-300">
                    B.Sc in Computer Science & Engineering
                  </p>
                  <p className="text-sm font-bold mt-2">
                    University of Creative Technology, Chattogram
                  </p>
                  <span className="flex gap-1 items-center text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" /> 2022 - current
                  </span>
                </div>
              </div>
            </div>
            {/* <p className="text-black mt-3 lg:text-start font-medium text-xl">
              Here are a few technologies I’ve been working with recently
            </p>
            <div className="grid grid-cols-2 text-gray-300">
              <p className="flex">
                <GoArrowSmallRight className="mt-1" /> JavaScript (ES6)
              </p>
              <p className="flex">
                <GoArrowSmallRight className="mt-1" /> ReactJS
              </p>
              <p className="flex">
                <GoArrowSmallRight className="mt-1" />
                NodeJS
              </p>
              <p className="flex">
                <GoArrowSmallRight className="mt-1" /> MongoDB
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
