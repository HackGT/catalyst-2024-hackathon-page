import React from 'react';
// import ShellImage from '../../images/Shell.svg';
// import SeaweedImage from '../../images/Seaweed.svg';
// import SeashellImage from '../../images/Seashell.svg';
import SeaweedLeft from '../../images/SeaweedLeft.svg';
import SeaweedRight from '../../images/SeaweedRight.svg';
import BeachConversion from '../../images/waves.svg';
import Seashell from '../../images/Seashell.svg';
import Shell from '../../images/Shell.svg';

const FrontPage = () => {
    return (
        <div className={`home bg-custom-gradient text-center pt-10 md:pt-44`}>
            <div className="flex justify-center items-center space-x-2 mb-4">
            </div>
            {/*<img src={SeaweedLeft} alt="Seaweed Left" className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 h-auto w-auto" />
            <img src={SeaweedRight} alt="Seaweed Right" className="hidden md:flex absolute right-0 top-1/6 transform -translate-y-1/3 h-auto w-auto" />
            <img src={Seashell} alt="Seashell" className="hidden lg:flex absolute left-1/16 top-1/4 transform translate-x-1/3 -translate-y-1/2 h-auto w-auto" />
            <img src={Shell} alt="Shell" className="hidden lg:flex absolute right-1/8 top-1/2 transform -translate-x-1/8 -translate-y-1/4 h-auto w-auto" />*/}
            
            <div className="font-coco text-center pb-24 p-4">
                {/* Title with White Text Outline */}
                <h1 className="text-5xl md:text-8xl text-white text-outline-small md:text-outline-large font-bold pb-3">
                    CATALYST HACKS
                </h1>
                
                {/* Subtitle - Updated to a Lighter Red */}
                <p className="text-3xl md:text-5xl text-[#FFD1D1]">
                    CHART NEW WATERS
                </p>
                <br /><br />

                {/* Date - Updated to a Soft Red for Contrast */}
                <p className="text-3xl md:text-5xl text-[#FFAAAA]">
                    NOVEMBER 8TH - 11TH 2024
                </p>
            </div>
            {/*<img src={BeachConversion} alt="Shell" className="w-full h-auto my-0" />*/}
        </div>
    );
};

export default FrontPage;