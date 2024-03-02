import React from 'react';

const TracksSection = () => {
    return (
        <div className="bg-blue-200 p-10">
            <h2 className="text-3xl font-bold text-center mb-8">EXPLORE THE TRACKS!</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                    {/* <img src={DesignIcon} alt="3D Design" className="mx-auto mb-2" /> */}
                    <h3 className="font-semibold">3D DESIGN</h3>
                    <p className="text-sm">PLACEHOLDER</p>
                </div>
                <div>
                    {/* <img src={CybersecurityIcon} alt="Cybersecurity" className="mx-auto mb-2" /> */}
                    <h3 className="font-semibold">CYBERSECURITY</h3>
                    <p className="text-sm">PLACEHOLDER</p>
                </div>
                <div>
                    {/* <img src={EntrepreneurshipIcon} alt="Entrepreneurship" className="mx-auto mb-2" /> */}
                    <h3 className="font-semibold">ENTREPRENEURSHIP</h3>
                    <p className="text-sm">PLACEHOLDER</p>
                </div>
                <div>
                    {/* <img src={MathIcon} alt="Math is Fun" className="mx-auto mb-2" /> */}
                    <h3 className="font-semibold">MATH IS FUN</h3>
                    <p className="text-sm">PLACEHOLDER</p>
                </div>
                <div>
                    {/* <img src={ProteinModelingIcon} alt="Protein Modeling" className="mx-auto mb-2" /> */}
                    <h3 className="font-semibold">PROTEIN MODELING</h3>
                    <p className="text-sm">PLACEHOLDER</p>
                </div>
            </div>
        </div>
    );
};

export default TracksSection;
