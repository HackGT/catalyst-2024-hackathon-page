import React from 'react';

const TracksSection = () => {
    return (
        <div id="tracks" className="p-10">
            <h2 className="text-3xl md:text-6xl text-textColorDark font-coco font-bold text-center mb-8 pb-5">TRACKS</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mb-5">
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">AI AQUARIUM</h3>
                    <p className="text-lg md:text-2xl font-bubblegum"> Dive into the ocean of information and harness the power of AI. Develop projects that analyze data, create predictive models, or use machine learning to solve complex problems. Extract valuable insights and create innovative AI-driven solutions.</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">WAVE OF CHANGE</h3>
                    <p className="text-lg md:text-2xl font-bubblegum"> Ride the wave of positive change by addressing environmental, community, and technological ethics challenges. Develop innovative solutions that balance sustainable development with responsible tech practices. </p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">WELLNESS WHIRLPOOL</h3>
                    <p className="text-lg md:text-2xl font-bubblegum"> Plunge into the world of health tech and create solutions that improve well-being. Design systems that address health issues and promote a healthier lifestyle for all.</p>
                </div>
            </div>
        </div>
    );
};

export default TracksSection;
