import React from 'react';
import ShellImage from '../../images/Shell.svg';
import SeaweedImage from '../../images/Seaweed.svg';
import SeashellImage from '../../images/Seashell.svg';


const FrontPage = () => {
    return (
        <div className="bg-custom-gradient text-center py-10 pt-20">
            <div className="flex justify-center items-center space-x-2 mb-4">
                <img src={ShellImage} alt="Shell" className="h-8" />
                <img src={SeaweedImage} alt="Seaweed" className="h-8" />
                <img src={SeashellImage} alt="Seashell" className="h-8" />
            </div>
            <div className="font-coco text-center p-4">
                <h1 className="text-5xl text-blue-800 font-bold">CATALYST</h1>
                <p className="text-xl text-blue-700">LAUNCH INTO LEARNING</p>
                <p className="text-md text-blue-600">SATURDAY, APRIL 6TH 2024</p>
            </div>
        </div>
    );
};

export default FrontPage;
