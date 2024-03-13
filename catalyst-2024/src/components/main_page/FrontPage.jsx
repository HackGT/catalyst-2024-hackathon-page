import React from 'react';
// import ShellImage from '../../images/Shell.svg';
// import SeaweedImage from '../../images/Seaweed.svg';
// import SeashellImage from '../../images/Seashell.svg';
import SeaweedLeft from '../../images/SeaweedLeft.svg';
import SeaweedRight from '../../images/SeaweedRight.svg';
import BeachConversion from '../../images/waves.svg'

const FrontPage = () => {
    return (
        <div className={`home bg-custom-gradient text-center pt-10 md:pt-44`}>
            <div className="flex justify-center items-center space-x-2 mb-4">
                {/* <img src={ShellImage} alt="Shell" className="h-8" />
                <img src={SeaweedImage} alt="Seaweed" className="h-8" />
                <img src={SeashellImage} alt="Seashell" className="h-8" /> */}
            </div>
            <img src={SeaweedLeft} alt="Seaweed Left" className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 h-auto w-auto" />
            <img src={SeaweedRight} alt="Seaweed Right" className="hidden md:flex absolute right-0 top-1/6 transform -translate-y-1/3 h-auto w-auto" />
            <div className="font-coco text-center pb-24 p-4">
                <h1 className="text-5xl md:text-9xl text-white text-outline-small md:text-outline-large font-bold pb-3">CATALYST</h1>
                <p className="text-3xl md:text-5xl text-headerBlue">DIVE INTO LEARNING</p>
                <br />
                <p className="text-2xl md:text-4xl text-middleGradient">SATURDAY, APRIL 6TH 2024</p>
            </div>
            <img src={BeachConversion} alt="Shell" className="w-full h-auto my-0" />
        </div>
    );
};

export default FrontPage;
