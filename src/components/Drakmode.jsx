import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { json } from "react-router-dom";
import { stringify } from "postcss";

const Drakmode = () => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    localStorage.setItem("activation", dark);
  };
  console.log(dark);
  return (
    <div>
      <button onClick={toggle}>
        {dark ? (
          <BsSunFill className="text-black text-4xl mt-2 ml-2" />
        ) : (
          <MdDarkMode className="text-black text-4xl mt-2 ml-2" />
        )}
      </button>
    </div>
  );
};

export default Drakmode;
