import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 min-h-screen bg-[#6E07F3]">
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
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    class="w-full border-black border-2 bg-white rounded-md  focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Enter your Number"
                    name="name"
                    class="w-full bg-white rounded-md  border-black border-2 focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
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
                    placeholder="Additional details"
                    class="w-full bg-white rounded-md border-black border-2 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    data-gramm="false"
                    wt-ignore-input="true"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container my-24 px-6 mx-auto"></div>
    </div>
  );
};

export default Contact;
