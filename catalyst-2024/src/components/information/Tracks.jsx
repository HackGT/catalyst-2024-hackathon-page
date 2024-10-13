import React from 'react';

const TracksSection = () => {
    return (
        <div id="tracks" className="p-10">
            <h2 className="text-3xl md:text-6xl text-textColorDark font-coco font-bold text-center mb-8 pb-5">EXPLORE THE TRACKS!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mb-5">
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">DATA ANALYTICS</h3>
                    <p className="text-lg md:text-2xl font-bubblegum"> [text]</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">SUSTAINABILITY</h3>
                    <p className="text-lg md:text-2xl font-bubblegum"> [text]</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">HEALTH</h3>
                    <p className="text-lg md:text-2xl font-bubblegum"> [text]</p>
                </div>
            </div>
        </div>
    );
};

export default TracksSection;
