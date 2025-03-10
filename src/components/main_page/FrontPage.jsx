import React from "react";
import FrontImage from "../../images/frontpage.svg";
import Car from "../../images/car.svg";

const FrontPage = () => {
  return (
    <div className={`home bg-bgcustom text-center pt-10 md:pt-44`}>
      <div className="relative justify-center items-center space-x-2 mb-4"></div>
      <img
        src={FrontImage}
        alt="Front"
        className="hidden lg:flex absolute left-1/8 top-0 h-screen w-100 z-0"
      />
      <img
        src={Car}
        alt="Racecar"
        className="hidden lg:flex absolute top-40p left-15p h-auto w-auto z-0"
      />
      <div className="font-racesport text-center pb-24 p-4 relative z-50 h-screen">
        <h1 className="text-5xl md:text-8xl text-white  pb-3 uppercase">
          CATALYST 2025
        </h1>
        <p className="text-2xl md:text-4xl text-white font-jetbrains">
          Start Your Engines!
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
