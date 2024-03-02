import React from 'react';

const Register = () => {
    return (
        <div className="font-coco text-center p-4">
            <div className="bg-gradient-to-b from-teal-200 via-teal-100 to-pink-100 relative text-center p-10">
                <h2 className="text-3xl text-registrationStart font-bold mb-4">START YOUR STORY!</h2>
                    <p className="font-bubblegum text-black-100 mb-2">
                        Registration is FREE and is open <br />
                        NOW at <a href="https://catalyst.hexlabs.org" className="font-bubblegum text-teal-800 underline">catalyst.hexlabs.org</a> <br />
                        and closes on [DATE]
                    </p>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-blue-700">
                    REGISTER HERE
                </button>
            </div>

        </div>
    );
};

export default Register;
