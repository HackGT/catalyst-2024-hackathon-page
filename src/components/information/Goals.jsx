import React from "react";
import Trophy from "../../images/trophy.svg";
import SteeringWheel from "../../images/steering-wheel.svg";
import StackedTires from "../../images/stacked-tires.svg";
import Helmet from "../../images/helmet.svg";

const goals = [
  {
    icon: <img src={Trophy} alt="Trophy" className="w-16 h-16 mx-auto" />,
    text: "To encourage the development of innovative and impactful projects",
  },
  {
    icon: (
      <img
        src={SteeringWheel}
        alt="SteeringWheel"
        className="w-16 h-16 mx-auto"
      />
    ),
    text: "To create a community for discussion, interaction, and innovation",
  },
  {
    icon: <img src={Helmet} alt="TroHelmetphy" className="w-16 h-16 mx-auto" />,
    text: "To foster connections between students with like-minded interest in Computer Science",
  },
  {
    icon: (
      <img
        src={StackedTires}
        alt="StackedTires"
        className="w-16 h-16 mx-auto"
      />
    ),
    text: "To build a safe space for development and competition",
  },
];

const GoalsSection = () => {
  return (
    <section id="goals" className="bg-[#0B0B28] text-white py-16 px-16">
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Changed from max-w-7xl to max-w-6xl */}
        <h2 className="text-4xl md:text-5xl font-racesport uppercase pb-8 tracking-wider text-left">
          Our Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {" "}
          {/* Increased gap from 6 to 8 */}
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-[#16163A] rounded-xl p-4 shadow-lg text-center border border-[#C0C0C0] w-full max-w-[250px] mx-auto"
            >
              {" "}
              {/* Added max-w-[250px] and mx-auto */}
              <div className="text-5xl">{goal.icon}</div>
              <p className="text-lg md:text-xl font-jetbrains leading-relaxed pt-4">
                {goal.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
