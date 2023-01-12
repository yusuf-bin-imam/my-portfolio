import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const [disable, setDisable] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0z0zm1d",
        "template_9snooxo",
        form.current,
        "FmqreMkLnogSjg1Zs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDisable(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" min-h-screen bg-[#6E07F3]">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1
              id="title"
              class="sm:text-3xl text-3xl font-bold title-font mb-2 text-white"
            >
              Want to discuss about Projects ?
            </h1>
            <p id="title" class="lg:w-2/3 mx-auto text-white text-2xl ">
              I'm always Open.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="user_name"
                      required
                      class="w-full border-black border-2 bg-white rounded-md  focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div class="p-2 w-1/2">
                  <div class="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      name="user_email"
                      required
                      class="w-full bg-white rounded-md border-black border-2 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      data-temp-mail-org="0"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Additional details"
                      class="w-full bg-white rounded-md border-black border-2 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      data-gramm="false"
                      wt-ignore-input="true"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button disabled={disable ? true : false} type="submit">
              submit
            </button>
            {/* 
            <Link class="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500">
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <button
                type="submit"
                class="text-sm font-medium transition-all group-hover:mr-4"
              >
                Send
              </button>
            </Link> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
