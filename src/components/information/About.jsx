import React from "react";
import RaceTrackBeardell from '../../images/raceTrackBeardell.svg';
import TireTrack from '../../images/TireTrack.svg';

const AboutSection = () => {
  return (
    <section id="about" className="my-16 w-full">
      <div className="flex flex-row justify-center items-center">
        <div className="pl-20 ml-8 w-5/6">
          <h2 className="text-xl md:text-4xl text-textColor font-racesport text-left">
            ABOUT
          </h2>
          <div className="text-xl md:text-2xl font-jetbrains text-left">
            <p className="pt-6 leading-none">
              HexLabs Presents Catalyst - An Idea-Thon For High Schoolers Hosted At Georgia Tech!
            </p>
            <p className="pt-6 leading-none">
              Join Us On Saturday, April 12th, 2025, For A Day Of Innovation, Collaboration, And Creativity. 
              Work Alongside Passionate Students To Learn More About The Fundamentals Of STEAM, Receive Mentorship 
              From College Students And Other Industry Professionals, And Participate In Fun Competitions!
            </p>
            <p className="pt-6 leading-none">
              Since Its Inception In 2018, Catalyst Has Welcomed Over 500 Students To Georgia Tech, Offering Engaging 
              Workshops, Networking Opportunities With Industry Professionals And College Students, And The Chance To 
              Collaborate With Like-Minded Peers. This Spring, We're Thrilled To Introduce Our First-Ever Idea-Thon, 
              Expanding Access To Even More Aspiring Innovators.
            </p>
            <p className="pt-6 leading-none">
              Don't Miss This Incredible Opportunity—Be Part Of The Next Generation Of Problem Solvers At Catalyst!
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <img 
            src={RaceTrackBeardell} 
            alt="Bear" 
            className="w-[420px] h-[420px] translate-y-60 translate-x-[120px] z-20 relative"  
          />
          <img 
            src={TireTrack} 
            alt="Tire Track" 
            className="w-[800px] h-[650px] -translate-y-20 z-10 relative" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
