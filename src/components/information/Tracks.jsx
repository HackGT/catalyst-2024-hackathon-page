import React from 'react';
import TrackCar from '../../images/Track_Car.png';
import TireTrack from '../../images/Tire_S_5_.png';
import RedBar from '../../images/RedBar.png';
import BlueBar from '../../images/BlueBar.png';
import YellowBar from '../../images/YellowBar.png';
import Outline from '../../images/Rectangle44.png';
import Tracks from '../../images/Tracks.png'

// New Imports
import HeaderText from '../../images/header.png';
import BodyText from '../../images/body.png';
import LeftArrow from '../../images/left-arrow.png';
import RightArrow from '../../images/right-arrow.png';

const TracksSection = () => {
    return (
        <div id="tracks" className="p-10 relative">
            <h2 className="text-3xl md:text-6xl text-textColor font-racesport text-center mb-8 pb-5">
                EXPLORE THE TRACKS!
            </h2>

            {/* Image and Progress Bar Section */}
            <div className="flex">
                {/* Car Image Section with Tire Track */}
                {/* "Tracks" Text - Smaller and Higher */}



{/* Car Image Section with Tire Track */}
<div className="relative w-[600px] h-[160px] mr-auto">
    <img 
        src={TireTrack}
        alt="Tire Track"
        className="absolute top-0 left-0 w-[100%] h-auto opacity-70"
    />
    <img 
        src={TrackCar}
        alt="Track Car"
        className="relative w-[600px] h-[160px] object-contain"
    />
</div>

                {/* Progress Bars with Text on Top */}
                <div className="flex flex-col gap-6 items-start ml-auto">
                    {/* Creativity Bar */}
                    <div className="w-[300px]">
                        <span className="text-textColorLight text-lg font-bold block text-center mb-1">CREATIVITY</span>
                        <div className="relative w-full h-[30px]">
                            <img 
                                src={Outline}
                                alt="Outline"
                                className="absolute w-full h-full"
                            />
                            <img 
                                src={RedBar}
                                alt="Creativity Bar"
                                className="absolute top-0 left-0 w-[70%] h-full"
                            />
                        </div>
                    </div>

                    {/* Technical Depth Bar */}
                    <div className="w-[300px]">
                        <span className="text-textColorLight text-lg font-bold block text-center mb-1">TECHNICAL DEPTH</span>
                        <div className="relative w-full h-[30px]">
                            <img 
                                src={Outline}
                                alt="Outline"
                                className="absolute w-full h-full"
                            />
                            <img 
                                src={YellowBar}
                                alt="Technical Depth Bar"
                                className="absolute top-0 left-0 w-[50%] h-full"
                            />
                        </div>
                    </div>

                    {/* Impact Bar */}
                    <div className="w-[300px]">
                        <span className="text-textColorLight text-lg font-bold block text-center mb-1">IMPACT</span>
                        <div className="relative w-full h-[30px]">
                            <img 
                                src={Outline}
                                alt="Outline"
                                className="absolute w-full h-full"
                            />
                            <img 
                                src={BlueBar}
                                alt="Impact Bar"
                                className="absolute top-0 left-0 w-[90%] h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* New Section with Header, Body Text, and Arrows */}
            <div className="relative flex items-center justify-center w-full">
  {/* Left Arrow - absolutely positioned */}
  <img 
    src={LeftArrow}
    alt="Left Arrow"
    className="absolute left-4 w-10 h-10 cursor-pointer"
  />
  
  {/* Header & Body Text */}
  <div className="flex flex-col items mx-6 scale-[1.5]">
    <img 
      src={HeaderText}
      alt="Header Text"
      className="w-[250px] mb-3"
    />
    <img 
      src={BodyText}
      alt="Body Text"
      className="w-[500px]"
    />
  </div>

  {/* Right Arrow - absolutely positioned */}
  <img 
    src={RightArrow}
    alt="Right Arrow"
    className="absolute right-4 w-10 h-10 cursor-pointer"
  />
</div>

    
</div>


    );
};

export default TracksSection;