import React from 'react';
import OceanLayersImage from '../../images/OceanLayers.svg';

const AskQuestionForm = () => {
    return (
        <div className="text-white text-center relative">
            <img src={OceanLayersImage} alt="OceanLayers" className="w-full"></img>

            <h2 className="text-2xl md:text-4xl font-bubblegum mb-4 absolute top-8 left-1/2 transform -translate-x-1/2 text-white font-bold">
                Finish!
            </h2>
            <h2 className="text-xl md:text-3xl font-bubblegum mb-4 absolute top-24 left-1/2 transform -translate-x-1/2 text-white">
                Other Questions?
            </h2>
            <h2 className="text-xl md:text-3xl font-bubblegum absolute top-36 left-1/2 transform -translate-x-1/2 text-white">
                Email us at hello@hexlabs.org!
            </h2>

            <p className="absolute text-xs md:text-3xl font-bubblegum bottom-5 left-1/2 transform -translate-x-1/2">
                WITH ❤️ FROM THE HEXLABS TEAM
            </p>
        </div>
    );
};

export default AskQuestionForm;
