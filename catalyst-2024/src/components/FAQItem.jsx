import React from 'react';

const FAQItem = ({ question, answer, link }) => {
    return (
        <div className="my-2 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{question}</h3>
            <p className="mt-1 text-sm">
                {answer}
                {link && (
                    <a href={link.url} className="text-blue-500 hover:text-blue-600">{link.text}</a>
                )}
            </p>
        </div>
    );
};

export default FAQItem;
