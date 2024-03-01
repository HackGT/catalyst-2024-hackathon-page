import React from 'react';

const AskQuestionForm = () => {
    return (
        <div className="bg-blue-900 text-white text-center p-10 relative">

            <h2 className="text-xl mb-4">Other Questions?</h2>
            <p className="mb-8">Email us at <a href="mailto:hello@hexlabs.org" className="text-blue-200 hover:underline">hello@hexlabs.org</a> and we'll be happy to help!</p>

            <form className="max-w-md mx-auto">
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
                <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                    Send Question
                </button>
            </form>

            <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                WITH 💙 FROM THE HEXLABS TEAM
            </p>
        </div>
    );
};

export default AskQuestionForm;
