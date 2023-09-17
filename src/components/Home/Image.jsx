import React from "react";
import img from "../../../src/assets/image/devTable.svg";

const Image = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="1500">
      <img
        className="w-[860px] mt-20 mx-auto"
        src={img}
        // src="https://mattfarley.ca/img/hero-devices.svg"
        alt=""
      />
    </div>
  );
};

export default Image;
