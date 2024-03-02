import React from 'react';

const Register = () => {
    return (
        <div className="bg-gradient-to-b from-teal-200 via-teal-100 to-pink-100 relative text-center p-10">
            <h2 className="text-header font-header text-teal-800 mb-4">START YOUR STORY!</h2>
            <p className="text-md text-teal-700 mb-4">
                Registration is FREE and is open <br />
                NOW at <a href="https://catalyst.hexlabs.org" className="text-teal-800 underline">catalyst.hexlabs.org</a> <br />
                and closes on [DATE]
            </p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-blue-700">
                REGISTER HERE
            </button>
        </div>
    );
};

export default Register;
