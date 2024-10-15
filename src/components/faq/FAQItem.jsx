import React from 'react';

const FAQItem = ({ question, answer, link }) => {
    return (
        <div className="my-2 p-4 bg-headerTeal text-headerBlue rounded-lg shadow-md">
            <h3 className="text-xl md:text-4xl font-bubblegum">{question}</h3>
            <p className="mt-1 text-md md:text-3xl font-bubblegum">
                {answer}
                {link && (
                    <a href={link.url} className="text-blue-500 hover:text-blue-600">{link.text}</a>
                )}
            </p>
        </div>
    );
};

export default FAQItem;
