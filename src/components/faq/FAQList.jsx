import React from 'react';
import FAQItem from './FAQItem';

const FAQList = () => {
    const faqs = [
        {
            question: 'Who can attend?',
            answer: 'High school students from all across the nation are welcome to register.',
            link: null,
        },
        {
            question: 'Where is Catalyst Hacks?',
            answer: "The hackathon will be fully virtual! You can register at ",
            link: { url: 'https://registration.hexlabs.org/67033be1d1c52afadcfb2968', text: 'this link.' },
        },
        {
            question: 'How do I choose which track to attend?',
            answer: 'Your project should adhere to one of the three tracks. You can either create an idea based off of these tracks or submit to whichever one fits your project the best.',
            link: null,
        },
        {
            question: 'What is HexLabs?',
            answer: 'HexLabs is a student organization and 501(c)(3) non-profit at Georgia Tech devoted to Computer Science outreach in collegiate and high school communities. To learn more, check out our organization website ',
            link: { url: 'https://hexlabs.org', text: 'here.' },
        }
    ];

    return (
        <div className="faq p-8">
            <h2 className="text-3xl md:text-6xl font-bold font-coco text-textColorDark text-center mb-8">FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} link={faq.link} />
                ))}
            </div>
        </div>
    );
};

export default FAQList;
