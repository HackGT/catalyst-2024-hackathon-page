import React from 'react';

const TracksSection = () => {
    return (
        <div id="tracks" className="p-10">
            <h2 className="text-3xl md:text-6xl text-textColorDark font-coco font-bold text-center mb-8">EXPLORE THE TRACKS!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mb-5">
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">3D DESIGN</h3>
                    <p className="text-lg md:text-3xl font-bubblegum"> Immerse yourselves into three-dimensional creativity with this workshop! It will be the key to guiding you through the
                        fundamentals of 3D modeling, architecture, animation, and product design. Join this experience where innovation meets inspiration. </p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">CYBERSECURITY</h3>
                    <p className="text-lg md:text-3xl font-bubblegum">As data becomes more and more valuable, so do the methods we use to secure it.
                        Cybersecurity is a vast field full of diverse ways to prevent software from being compromised. It's like hacking, but ethical of course.
                        If you're looking to explore a swiftly growing career area of crucial importance to all companies and businesses, start with an introduction from this track!</p>
                </div>
                <div>
                    <h3 className="text-xl md:text-3xl md:text-3xl text-textColorDark font-coco font-bold text-center mb-5">ENTREPRENEURSHIP</h3>
                    <p className="text-lg md:text-3xl font-bubblegum">Ready to turn your startup dreams into a reality?  Whether you are a seasoned entrepreneur or just starting out, this course will provide you
                        with the necessary resources, support, and connections you need to succeed.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 text-center mb-5">
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">MATH IS FUN!</h3>
                    <p className="text-lg md:text-3xl font-bubblegum">Dive into the electrifying world of algorithms, graph theory, and fractals with our dynamic interactive sessions and
                        hands-on activities! This workshop is your ticket to uncovering the awesome power and beauty of math in the world around us. Don't miss out
                        on the chance to see math in action like never before!</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl text-textColorDark font-coco font-bold text-center mb-5">PROTEIN MODELING</h3>
                    <p className="text-lg md:text-3xl font-bubblegum">Have you ever wondered about the way biological and molecular materials were modeled? In this workshop, you will
                        delve into the uses of Jmol software to explore the intricate world of molecular visualization and manipulation, unlocking the secrets of the molecular realm. </p>
                </div>
            </div>
        </div>
    );
};

export default TracksSection;
