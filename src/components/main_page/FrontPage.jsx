import React from "react";
import Car from "../../images/hificar.png";
import Bear from "../../images/bear.png";
import FrontTrack from "../../images/frontTrack.png";

const FrontPage = () => {
  return (
    <div className={`home bg-bgcustom text-center pt-10 md:pt-20`}>
      <div className="relative justify-center items-center space-x-2 mb-4"></div>
      <img
        src={FrontTrack}
        alt="Front"
        className="hidden lg:flex absolute left-1/8 top-0 h-screen w-100 z-0"
      />
      <img
        src={Car}
        alt="Racecar"
        className="hidden lg:flex absolute top-[65%] left-15p h-auto w-auto z-0"
      />
      <img
        src={Bear}
        alt="Bear Driver"
        className="hidden lg:flex absolute top-[65%] left-[44%] h-46 w-46 z-5"
      />
      <div className="font-racesport text-center pb-24 p-4 relative z-50 h-screen">
        <h1 className="text-5xl md:text-8xl text-white pb-3 uppercase">
          CATALYST 2025
        </h1>
        <p className="text-2xl md:text-4xl text-white font-jetbrains pb-16">
          Start Your Engines!
        </p>
        <a 
          href="https://registration.hexlabs.org/67ca291d8f09288dbc9fa54f"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#DB3333] text-white font-jetbrains px-8 py-4 rounded-lg text-xl md:text-3xl font-bold hover:bg-[#DB3333]/80 transition-colors duration-200"
        >
          Register Here
        </a>
      </div>
    </div>
  );
};

export default FrontPage;