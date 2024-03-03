import React from 'react';

const TracksSection = () => {
    return (
        <div id="tracks" className="p-10">
            <h2 className="text-3xl text-textColorDark font-coco font-bold text-center mb-8">EXPLORE THE TRACKS!</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                    <h3 className="font-semibold font-bubblegum">3D DESIGN</h3>
                    <p className="text-sm font-bubblegum">PLACEHOLDER</p>
                </div>
                <div>
                    <h3 className="font-semibold font-bubblegum">CYBERSECURITY</h3>
                    <p className="text-sm font-bubblegum">PLACEHOLDER</p>
                </div>
                <div>
                    <h3 className="font-semibold font-bubblegum">ENTREPRENEURSHIP</h3>
                    <p className="text-sm font-bubblegum">PLACEHOLDER</p>
                </div>
                <div>
                    <h3 className="font-semibold font-bubblegum">MATH IS FUN</h3>
                    <p className="text-sm font-bubblegum">PLACEHOLDER</p>
                </div>
                <div>
                    <h3 className="font-semibold font-bubblegum">PROTEIN MODELING</h3>
                    <p className="text-sm font-bubblegum">PLACEHOLDER</p>
                </div>
            </div>
        </div>
    );
};

export default TracksSection;
