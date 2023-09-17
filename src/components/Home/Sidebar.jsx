import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <Tooltip
        className="ml-5 font-bold text-black rounded bg-white"
        content="Facebook"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        placement="right-end"
      >
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://web.facebook.com/profile.php?id=100032670966425"
            className="text-gray-500"
          >
            <RiFacebookFill />
          </a>
        </span>
      </Tooltip>
      <br />
      <Tooltip
        className="ml-5 font-bold text-black rounded bg-white"
        content="Linkedin"
        placement="right-end"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <a
          href="https://www.linkedin.com/in/yusuf-bin-imam/"
          className="ml-3 text-gray-500"
        >
          <TfiLinkedin className="-mt-2" />
        </a>
      </Tooltip>
      <Tooltip
        className="ml-5 font-bold text-black rounded bg-white"
        content="Github"
        placement="right-end"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <a
          className="ml-3  text-gray-500 "
          href="https://github.com/yusuf-bin-imam"
        >
          <FaGithub className="" />
        </a>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
