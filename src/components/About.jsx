import React from "react";

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
            data-aos-duration="3000"
            className="mx-auto"
          >
            <img
              className="w-72 mx-auto ml-10 mb-5 lg:mb-32"
              src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png"
              alt=""
            />
          </div>
          <div
            id="title"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="lg:mt-1 mx-auto"
          >
            <h2 className="text-4xl -ml-1 mb-3  text-white lg:text-start font-bold">
              Hi there..! I’m Yusuf <br />
              Nice to meet you.
            </h2>
            <p className="text-gray-200 lg:text-start font-medium text-xl">
              I'm a junior Mern Stack programmer. I've been working in this
              industry for a year. I've created some projects at this time for
              educational purposes.Here are a full-stack also. My objective is
              to make a career as a web developer. I am consistently giving this
              place my all in an effort to achieve my aim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
