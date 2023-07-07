import { FiExternalLink, FiGithub } from "react-icons/fi";

const MoreProjects = () => {
  return (
    <div className="mt-20 min-h-screen  max-w-screen-lg mx-auto ">
      <h1 id="title" className="text-3xl mt-10 text-black font-bold">
        Additional Notable Projects
      </h1>
      <div className="grid mt-14 gap-5   grid-cols-1 lg:grid-cols-3">
        <div className="h-[300px] w-[323px] mx-auto bg-[#112240]  text-gray-300 font-bold p-5">
          <div className="flex justify-between">
            <h1 id="title" className="text-2xl font-bold">
              Skillshare
            </h1>
            <div className="flex mt-2 ml-5 gap-5">
              <a
                className="tooltip"
                data-tip="Client Repo"
                href="https://github.com/yusuf-bin-imam/SkillShare_Client"
              >
                <FiGithub />
              </a>
              <a
                className="tooltip"
                data-tip="Server Repo"
                href="https://github.com/yusuf-bin-imam/SkillShare_Server"
              >
                <FiGithub />
              </a>
              <a
                className="tooltip"
                data-tip="Live Link"
                href="https://skillshare-authentication.web.app/"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <p className="text-start mt-5">
            Skillshare is an online learning platform offering programming
            courses to help individuals develop their skills and knowledge in
            programming.
          </p>
          <p className="font-bold mt-10  text-start">
            React I Firebase I Render I Express I NodeJS I MongoDB
          </p>
        </div>
        <div className="h-[300px] w-[323px] mx-auto bg-[#112240]  text-gray-300 font-bold p-5">
          <div className="flex justify-between">
            <h1 id="title" className="text-2xl font-bold">
              Gadget City
            </h1>
            <div className="flex mt-2 ml-5 gap-5">
              <a
                className="tooltip"
                data-tip="Client Repo"
                href="https://github.com/yusuf-bin-imam/Gadget-City-Client"
              >
                <FiGithub />
              </a>
              <a
                className="tooltip"
                data-tip="Server Repo"
                href="https://github.com/yusuf-bin-imam/Gadget-City-Server"
              >
                <FiGithub />
              </a>
              <a
                className="tooltip"
                data-tip="Live Link"
                href="https://gadget-city-475e9.web.app/"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <p className="text-start mt-5">
            Gadget City: Offering affordable smartwatches, our website aims to
            provide quality tech gadgets that fit every budget.
          </p>
          <p className="font-bold mt-10  text-start">
            React I Firebase I Vercel I Express I NodeJS I MongoDB
          </p>
        </div>

        <div className="h-[300px] mx-auto w-[323px] bg-[#112240]  text-gray-300 font-bold p-5">
          <div className="flex justify-between">
            <h1 id="title" className="text-2xl font-bold">
              Codecademy
            </h1>
            <div className="flex mt-2 ml-5 gap-5">
              <a
                className="tooltip"
                data-tip="Client Repo"
                href="https://github.com/yusuf-bin-imam/quiz-crackers"
              >
                <FiGithub />
              </a>
              <a
                className="tooltip"
                data-tip="Live Link"
                href="https://codecademy-quiz.netlify.app/"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <p className="text-start mt-5">
            Codecademy: Interactive programming quizzes, personalized
            curriculum, instant feedback, and a supportive community for
            collaborative learning.
          </p>
          <p className="font-bold mt-10  text-start">
            React I Firebase I Render I Express I NodeJS I MongoDB
          </p>
        </div>
        <div className="h-[300px] mx-auto w-[323px] bg-[#112240]  text-gray-300 font-bold p-5">
          <div className="flex justify-between">
            <h1 id="title" className="text-2xl font-bold">
              Panda Commerce
            </h1>
            <div className="flex mt-2 ml-5 gap-5">
              <a
                className="tooltip"
                data-tip="Client Repo"
                href="https://github.com/yusuf-bin-imam/panda-commerce"
              >
                <FiGithub />
              </a>
              <a
                className="tooltip"
                data-tip="Live Link"
                href="https://panda-commerce-shop-web.netlify.app/"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <p className="text-start mt-5">
            Panda: Our website offers a wide range of sneakers and backpacks,
            providing trendy and reliable options for fashion and functionality.
          </p>
          <p className="font-bold mt-10  text-start">HTML I CSS</p>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
