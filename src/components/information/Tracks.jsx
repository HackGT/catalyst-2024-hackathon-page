import React, { useState } from 'react';
import TrackCar from '../../images/Track_Car.png';
import TireTrack from '../../images/Tire_S_5_.png';
import RedBar from '../../images/RedBar.png';
import BlueBar from '../../images/BlueBar.png';
import YellowBar from '../../images/YellowBar.png';
import Outline from '../../images/Rectangle44.png';
//import Tracks from '../../images/Tracks.png'

// New Imports
import HeaderText from '../../images/header.png';
import BodyText from '../../images/body.png';
import LeftArrow from '../../images/left-arrow.png';
import RightArrow from '../../images/right-arrow.png';
import GreenCar from '../../images/greencar.png';
import YellowCar from '../../images/yellowcar.png'

const TracksSection = () => {
    const [currentTrack, setCurrentTrack] = useState(0);

    const tracks = [
        {
            title: "Health Tech",
            description: "The future of healthcare is rapidly changing, and you don’t want to be left \nbehind in this race! This Grand Prix is all about pushing the limits of \ninnovation, engineering cutting-edge medical solutions, and racing toward a \nhealthier world. Diagnostic dashboards to patient-centric apps, YOU NAME IT! \nTake the challenge and help humanity race towards a healthier future!",
            carImage: GreenCar,
            header: HeaderText,
            body: BodyText,
            bars: {
                creativity: 70,
                technicalDepth: 50,
                impact: 90
            }
        },
        {
            title: "Sustainability Tech",
            description: "Green Light for a Greener Future! Rev your engines and shift into high gear for the Sustainability Track! This isn't just about speed—it’s about endurance, efficiency. From turbocharging renewable energy ideas to creating eco-friendly innovations, you’ll navigate the fast lane toward a cleaner, greener future.",
            carImage: YellowCar,
            header: HeaderText,
            body: BodyText,
            bars: {
                creativity: 80,
                technicalDepth: 85,
                impact: 60
            }
        },
        {
            title: "Artificial Intelligence",
            description: "From neural networks to machine learning pit stops, push your AI knowledge to the limit. Tune your models like high-performance engines, optimize your algorithms for maximum horsepower, and AIM to be the first at the finish line and take the checkered flag of AI innovation!",
            carImage: TrackCar,
            header: HeaderText,
            body: BodyText,
            bars: {
                creativity: 90,
                technicalDepth: 70,
                impact: 75
            }
        }
    ];

    const handlePrevTrack = () => {
        setCurrentTrack(prev => (prev === 0 ? tracks.length - 1 : prev - 1));
    };

    const handleNextTrack = () => {
        setCurrentTrack(prev => (prev === tracks.length - 1 ? 0 : prev + 1));
    };

    return (
        <div id="tracks" className="p-10 relative">
            <h2 className="text-3xl md:text-6xl text-textColor font-racesport text-left mb-8 pb-5">
                TRACKS
            </h2>

            <div className="flex flex-col">
                {/* Top section with car and progress bars side by side */}
                <div className="flex justify-between items-end mb-6">
                    {/* Car Image Section - adjusted position */}
                    <div className="relative w-[700px] h-[200px]">
                        <img 
                            src={TireTrack}
                            alt="Tire Track"
                            className="absolute top-0 left-0 w-[100%] h-auto opacity-70 ml-20"
                        />
                        <img 
                            src={tracks[currentTrack].carImage}
                            alt="Track Car"
                            className="relative w-[700px] h-[200px] object-contain"
                        />
                    </div>

                    {/* Progress Bars aligned with bottom of car */}
                    <div className="flex flex-col gap-6 items-start mr-20">
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
                                    className="absolute top-0 left-0 h-full transition-all duration-300"
                                    style={{ width: `${tracks[currentTrack].bars.creativity}%` }}
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
                                    className="absolute top-0 left-0 h-full transition-all duration-300"
                                    style={{ width: `${tracks[currentTrack].bars.technicalDepth}%` }}
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
                                    className="absolute top-0 left-0 h-full transition-all duration-300"
                                    style={{ width: `${tracks[currentTrack].bars.impact}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Track Title and Description Section */}
                <div className="ml-20 mb-8">
                    <h3 className="text-2xl md:text-5xl font-racesport text-textColor text-left mb-4">
                        {tracks[currentTrack].title}
                    </h3>
                    <div className="relative w-full max-w-[1200px]">
                        <img 
                            src={LeftArrow}
                            alt="Left Arrow"
                            className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer hover:opacity-75 transition-opacity"
                            onClick={handlePrevTrack}
                        />
                        
                        <p className="text-textColor text-lg mx-6 font-jetbrains">
                            {tracks[currentTrack].description}
                        </p>

                        <img 
                            src={RightArrow}
                            alt="Right Arrow"
                            className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer hover:opacity-75 transition-opacity"
                            onClick={handleNextTrack}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TracksSection;
