import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="my-4">
            <div className="max-w-7xl mx-auto p-4 text-left font-bubblegum">
                <h2 className="text-6xl text-textColor font-coco font-bold text-left pb-3">ABOUT</h2>
                <p className="text-3xl">HexLabs presents Catalyst, a day of STEAM-related activities directed toward high school students all throughout Georgia!</p>
                <p className="text-3xl pt-3">This will be an opportunity for participants to:</p>
                <ul className="text-3xl list-disc pl-6">
                    <li>Learn about the world of STEAM and Computer Science as a career path</li>
                    <li>Gain insight into impactful, widely-known technology companies</li>
                    <li>Receive mentorship from college students and other industry professionals</li>
                    <li>Connect with opportunities at Georgia Tech to further their education and exposure</li>
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;
