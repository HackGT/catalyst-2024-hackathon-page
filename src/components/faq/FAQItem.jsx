import React, { useState } from 'react';
import UpArrow from '../../images/up-arrow.svg';
import DownArrow from '../../images/down-arrow.svg';

const FAQItem = ({ question, answer, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full mx-auto my-2 bg-[#C6C6C6] text-bgcustom rounded-[20px] shadow-md">
            <button 
                className="text-[24px] bg-[#FFFFFF] text-[#000000] p-4 px-8 w-full flex items-center justify-between text-left font-jetbrains font-bold tracking-wider rounded-[20px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <img 
                    src={isOpen ? UpArrow : DownArrow} 
                    alt="Toggle Icon" 
                    className="h-4 w-6 transition-transform duration-300"
                />
            </button>
            {isOpen && (
                <p className="text-[20px] text-[#000000] p-4 px-8 mt-1 font-jetbrains bg-grey font-bold text-left tracking-wider">
                    {answer}
                    {link && (
                        <a href={link.url} className="text-blue-500 hover:text-blue-600">{link.text}</a>
                    )}
                </p>
            )}
        </div>
    );
};

export default FAQItem;
