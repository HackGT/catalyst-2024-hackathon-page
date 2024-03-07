import React from 'react';
import BubblesImage from '../../images/Bubbles.png';

const Register = () => {
    
    return (
        <div className="font-coco text-center p-4">
            <div className="bg-gradient-to-b from-teal-200 via-teal-100 to-pink-100 relative text-center p-10 grid grid-cols-3 gap-4 items-center">
                <div className="hidden md:flex col-span-1 flex justify-end">
                    <img src={BubblesImage} alt="Bubbles" className="max-w-full h-auto" />
                </div>

                <div className="col-span-3 md:col-span-1">
                    <h2 className="text-4xl md:text-6xl text-textColor font-bold mb-4 text-center">START YOUR STORY!</h2>
                        <p className="text-xl md:text-3xl font-bubblegum text-black-100 mb-2 pb-4 text-center">
                            Registration is FREE and is open <br />
                        NOW at <a href="https://registration.hexlabs.org/" className="font-bubblegum text-teal-800 underline">registration.hexlabs.org</a> <br />
                            and closes on April 1st at 11:59 PM!
                        </p>
                    <a href="https://registration.hexlabs.org/" className="bg-blue-500 text-3xl font-bubblegum text-white whitespace-nowrap font-bold py-3 px-4 rounded-full mt-4 hover:bg-blue-700">
                        REGISTER HERE
                    </a>
                </div>

                <div className="hidden md:flex col-span-1 flex justify-start">
                    <img src={BubblesImage} alt="Bubbles" className="max-w-full h-auto" />
                </div>

            </div>

        </div>
    );
};

export default Register;
