import React from 'react';
import ShellImage from '../../images/Shell.svg';
import SeaweedImage from '../../images/Seaweed.svg';
import SeashellImage from '../../images/Seashell.svg';

const FrontPage = () => {
    return (
        <div className={`home bg-custom-gradient text-center pb-10 pt-20 md:pt-20`}>
            <div className="flex justify-center items-center space-x-2 mb-4">
                {/* <img src={ShellImage} alt="Shell" className="h-8" />
                <img src={SeaweedImage} alt="Seaweed" className="h-8" />
                <img src={SeashellImage} alt="Seashell" className="h-8" /> */}
            </div>
            <div className="font-coco text-center p-4">
                <h1 className="text-8xl md:text-15xl text-white text-outline font-bold pb-3">CATALYST</h1>
                <p className="text-5xl text-headerBlue">LAUNCH INTO LEARNING</p>
                <br />
                <p className="text-5xl text-middleGradient">SATURDAY, APRIL 6TH 2024</p>
            </div>
        </div>
    );
};

export default FrontPage;
