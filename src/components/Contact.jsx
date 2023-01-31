import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="font-bold rounded py-10 max-w-screen-xl mx-auto  ">
        <h2
          id="title"
          className="mt-10 flex text-black justify-center text-3xl font-bold"
        >
          <span className="mr-2"> Lets </span>
          <Typical
            className="text-red-700"
            steps={["talk", 3000, "discuss", 2000]}
            loop={Infinity}
            wrapper="P"
          />
        </h2>
        <p id="title" className=" text-xl text-black mt-3">
          Fell free to contact with me via
          <a
            className="text-blue-500 hover:text-green-600  font-bold ml-2 text-xl"
            href="mailto:yusufbinemamstk@gmail.com"
          >
            Email Me
          </a>
        </p>
        <p id="title" className="text-black text-xl ">
          or fill the from at
          <Link to={"/contactDetails"}>
            <p
              id="title"
              className="text-blue-500 hover:text-green-700 inline font-bold ml-2 text-xl"
            >
              Contact Page
            </p>
          </Link>
        </p>
        <div className="mt-3 bg-gray-400 py-3 px-20 gap-5 border border-black  rounded-lg w-28  text-black  mx-auto flex justify-around lg:hidden">
          <a href="https://web.facebook.com/profile.php?id=100032670966425">
            <i class="uil uil-facebook-f text-2xl"></i>
          </a>
          <a href="https://github.com/RedEye75">
            <i class="uil uil-github-alt text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/yusuf-bin-imam/">
            <i class="uil uil-linkedin-alt text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
