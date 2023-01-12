import React from "react";

const MyProject = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      <div className="mt-10">
        <h3 id="title" className="text-3xl  font-bold ">
          My Recent work
        </h3>
        <p id="text" className="font-bold text-xl mt-3">
          The projects I've worked on are listed here.
        </p>
      </div>
      <section class="text-gray-600  body-font overflow-hidden">
        <div id="container">
          <div id="content">
            <div id="screen">
              <img
                alt="ecommerce"
                class="lg:w-full w-full  lg:h-[760px] h-64 object-cover object-center rounded"
                src="https://www.linkpicture.com/q/screencapture-plumboy-37ca4-web-app-2023-01-12-16_30_52.png"
              />
            </div>
          </div>
        </div>
        <div class="container -mt-36  px-5 py-24 mx-auto">
          <div class="lg:w-full mx-auto ">
            <div class=" w-full mx-auto lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className=" px-20 ">
                <h1
                  id="title"
                  class="text-gray-900 text-3xl title-font font-bold mb-1"
                >
                  Plumboy
                </h1>

                <p id="text" class="font-bold">
                  The best plumbing service for your residence or business
                </p>
              </div>

              <div>
                <a href="https://plumboy-37ca4.web.app/">
                  <button
                    id="title"
                    class="  mt-3 text-white bg-[#6E07F3]  py-3 px-10 border border-black focus:outline  rounded"
                  >
                    Live_View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid -mt-5 mb-10 grid-cols-2 gap-7 ">
        <div>
          <a href="#" class="group rounded-lg relative block h-full bg-black">
            <img
              alt="Developer"
              src="https://i.postimg.cc/tRtrHC23/Screenshot-20230112-090724.png"
              class="absolute rounded-md inset-0 h-full w-[690px] object-cover opacity-75 transition-opacity group-hover:opacity-10"
            />

            <div class="relative p-8">
              {/* <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-2xl font-bold text-white">Tony Wayne</p> */}

              <div class="mt-60">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {" "}
                  <p id="title" className="font-bold text-4xl text-white">
                    Skill_Share
                  </p>
                  <p id="text" className="font-medium text-xl text-[#6E07F3]">
                    Learn without Limits
                  </p>
                  <a href="https://skillshare-authentication.web.app/">
                    <button
                      id="title"
                      class="  mt-3 text-white bg-[#6E07F3]  py-3 px-10 border border-black focus:outline  rounded"
                    >
                      Live_View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            class="group rounded-lg relative block h-[412px] bg-black"
          >
            <img
              alt="Developer"
              src="https://www.linkpicture.com/q/Screenshot_20230112_083612.png"
              class="absolute rounded-md inset-0 h-full w-[690px] object-cover opacity-75 transition-opacity group-hover:opacity-10"
            />

            <div class="relative p-8">
              {/* <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p>

              <p class="text-2xl font-bold text-white">Tony Wayne</p> */}

              <div class="mt-60">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {" "}
                  <p id="title" className="font-bold text-4xl text-white">
                    Skill_Share
                  </p>
                  <p id="text" className="font-medium text-xl text-[#6E07F3]">
                    Learn without Limits
                  </p>
                  <a href="https://skillshare-authentication.web.app/">
                    <button
                      id="title"
                      class="  mt-3 text-white bg-[#6E07F3]  py-3 px-10 border border-black focus:outline  rounded"
                    >
                      Live_View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
