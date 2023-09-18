import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { AiOutlineSend } from "react-icons/ai";
const Contact = () => {
  const form = useRef();
  const [disable, setDisable] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // const serviceId = service_nu5c957;
    // const templateId = template_hhwbi36;
    // const publicKey = sZkL6tz_dbpczx_ND;

    // const templateParams = {
    //   from_name: e.target.user_name.value,
    //   from_email: e.target.user_email.value,
    //   message: e.target.message.value,
    // };

    emailjs
      .sendForm(
        "service_nu5c957",
        "template_hhwbi36",
        form.current,
        "sZkL6tz_dbpczx_ND"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("The message has been successfully sent");
          e.target.reset();
          setDisable(true);
        },
        (error) => {
          toast.error("message not sent");
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" min-h-screen bg-[#6E07F3]">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1
              id="title"
              data-aos="fade-down"
              data-aos-duration="1500"
              className="sm:text-3xl text-3xl font-bold title-font mb-2 text-white"
            >
              Want to work together or have any questions?
            </h1>
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              id="title"
              className="lg:w-2/3 mx-auto text-white text-2xl "
            >
              I'm always Open.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div
                    className="relative"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <input
                      type="text"
                      id="inputTxt"
                      placeholder="Enter your name"
                      name="user_name"
                      required
                      className="w-full border-black border-2 bg-white rounded-md  focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div
                    className="relative"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      id="inputTxt"
                      name="user_email"
                      required
                      className="w-full bg-white rounded-md border-black border-2 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      data-temp-mail-org="0"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div
                    className="relative"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <textarea
                      id="inputTxt"
                      name="message"
                      required
                      placeholder="Additional details"
                      className="w-full bg-white rounded-md border-black border-2 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      data-gramm="false"
                      wt-ignore-input="true"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              id="title"
              className="bg-yellow-500  border border-black px-10 rounded-md text-black font-bold py-3"
              disabled={disable ? true : false}
              type="submit"
            >
              <span className="flex gap-1">
                Send <AiOutlineSend className="mt-1 " />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
