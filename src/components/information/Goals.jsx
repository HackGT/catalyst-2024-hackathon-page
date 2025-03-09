import React from "react";

const GoalsSection = () => {
  return (
    <div className="max-w-7xl ml-20 p-4 px-16 text-left">
      <h2 className="text-3xl md:text-6xl text-textColor font-racesport pb-3">
        OUR GOALS
      </h2>
      <ul className="text-xl md:text-xl text-textColor font-jetbrains list-disc pl-6">
        <li>
          To encourage the development of innovative and impactful projects
        </li>
        <li>
          To foster connections between students with like-minded interest in
          computer science
        </li>
        <li>
          To create a community for discussion, interaction, and innovation
        </li>
        <li>To build a safe space for development and competition</li>
      </ul>
    </div>
  );
};

export default GoalsSection;
