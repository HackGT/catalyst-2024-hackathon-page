import React from "react";
// import ShellImage from '../../images/Shell.svg';
// import SeaweedImage from '../../images/Seaweed.svg';
// import SeashellImage from '../../images/Seashell.svg';
import SeaweedLeft from "../../images/SeaweedLeft.svg";
import SeaweedRight from "../../images/SeaweedRight.svg";
import BeachConversion from "../../images/waves.svg";
import Seashell from "../../images/Seashell.svg";
import Shell from "../../images/Shell.svg";

const FrontPage = () => {
  return (
    <div className={`home bg-bgcustom text-center pt-10 md:pt-44`}>
      <div className="flex justify-center items-center space-x-2 mb-4"></div>

      <div className="font-racesport text-center pb-24 p-4">
        <h1 className="text-5xl md:text-8xl text-white  pb-3 uppercase">
          CATALYST 2025
        </h1>
        <p className="text-2xl md:text-4xl text-white font-jetbrains">
          It's Lights Out And Away We Go!
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default FrontPage;
