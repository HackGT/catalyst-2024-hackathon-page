import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScheduleSection = () => {

  return (
    <div id="schedule" className="relative p-8 text-center">
      <h2 className="text-3xl md:text-6xl text-textColor font-racesport mb-3">
        SCHEDULE
      </h2>
      <div id="slider">
        <p className="text-2xl md:text-4xl font-jetbrains text-textColor">
          Coming soon!!
        </p>
      </div>
    </div>
  );
};

export default ScheduleSection;
