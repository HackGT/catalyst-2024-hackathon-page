import React from 'react';
import OceanLayersImage from '../../images/OceanLayers.svg';

const AskQuestionForm = () => {
    return (
        <div className="text-white text-center relative">

            <h2 className="text-xl md:text-3xl font-bubblegum mb-4 absolute top-10 left-1/2 transform -translate-x-1/2 text-white">Other Questions?</h2>
            <h2 className="text-xl md:text-3xl font-bubblegum absolute top-20 left-1/2 transform -translate-x-1/2 text-white">Email us at hello@hexlabs.org!</h2>

            {/* <form className="max-w-md mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full p-2 rounded text-blue-900"
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Your question"
                        className="w-full p-2 rounded text-blue-900"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button onClick={sendEmail} type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                    Send Question
                </button>
            </form> */}
            <p className="text-xs md:text-3xl font-bubblegum text-center mt-8">
    WITH 💙 FROM THE HEXLABS TEAM
</p>
        </div>
    );
};

export default AskQuestionForm;
