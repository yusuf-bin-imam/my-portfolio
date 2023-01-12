import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
          toast.success("The message has been successfully sent");
          e.target.reset();
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
                      id="inputTxt"
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
                      id="inputTxt"
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
                      id="inputTxt"
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
            <button
              id="title"
              className="bg-yellow-500 border border-black px-10 rounded-md text-black font-bold py-3"
              disabled={disable ? true : false}
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
