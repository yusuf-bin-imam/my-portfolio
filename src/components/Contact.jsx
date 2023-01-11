import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-[#6E07F3]">
      <div className="font-bold bg-[#f7e8e8] rounded-t-2xl py-10 max-w-screen-lg mx-auto  ">
        <h2 id="contact" className="mt-10 text-3xl font-bold">
          Lets talk
        </h2>
        <p id="title" className=" text-xl  mt-3">
          Fell free to contact with me via
          <a
            className="text-blue-500 hover:text-green-600  font-bold ml-2 text-xl"
            href="mailto:yusufbinemamstk@gmail.com"
          >
            Email Me
          </a>
        </p>
        <p id="title" className=" text-xl ">
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
      </div>
      <div>
        <img
          className="w-72 mx-auto ml-10 mb-32"
          // src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-us-5467852-4568171.png"
          src="https://cdn-icons-mp4.flaticon.com/512/8722/8722677.mp4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
