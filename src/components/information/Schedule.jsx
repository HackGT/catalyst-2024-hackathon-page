import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FinishFlag from '../../images/Finish_Flag.svg';
import FinishFlagLeft from '../../images/FinishFlagLeft.svg';
import Tire6 from '../../images/Tire_6.svg';
import Tire6Left from '../../images/Tire_6_Left.svg';

const ScheduleSection = () => {

  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <img 
          src={Tire6Left} 
          alt="Tire Tracks" 
          className="w-[400px] h-[400px] translate-y-10"  
        />
      </div>
      <div>
        <img 
          src={FinishFlagLeft} 
          alt="Finish Flag" 
          className="w-[150px] h-[150px] -translate-y-10"  
        />
      </div>
      <div id="schedule" className="relative p-6 text-center mt-80 mb-80">
        <h2 className="text-4xl md:text-4xl text-textColor font-racesport mb-3 mt-10">
          SCHEDULE - COMING SOON
        </h2>
        <div id="slider">
          <p className="text-2xl md:text-2xl font-jetbrains text-textColor">
            *subject to change as details arrive and will be updated accordingly
          </p>
        </div>
      </div>
      <div>
        <img 
          src={FinishFlag} 
          alt="Finish Flag" 
          className="w-[150px] h-[150px] -translate-y-10"  
        />
      </div>
      <div>
        <img 
          src={Tire6} 
          alt="Tire Tracks" 
          className="w-[400px] h-[400px] translate-y-10"  
        />
      </div>
    </div>
  );
};

export default ScheduleSection;
