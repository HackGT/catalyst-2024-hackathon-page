import React from "react";
import Banner from "../../images/Frame.svg";
import Podium from "../../images/podium.svg";

const Footer = () => {
  return (
    <div className="bg-bgcustom text-center pt-60 py-10 w-full flex flex-col items-center justify-center">
      <div className="font-racesport w-full flex flex-col items-center">
        <p className="text-xs md:text-4xl text-white uppercase mb-6">FINISH!</p>

        <img
          src={Banner}
          alt="Banner"
          className="hidden md:block w-100 max-w-8xl my-4"
        />

        <img
          src={Podium}
          alt="Banner"
          className="hidden md:block max-w-2xl my-4 pt-20"
        />

        <div className="w-1/5 mt-6">
          <p className="text-xs md:text-2xl font-racesport">
            WITH ❤️ FROM THE HEXLABS TEAM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
