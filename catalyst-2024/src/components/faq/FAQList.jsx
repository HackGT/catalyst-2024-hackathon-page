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
            question: 'Where is the Catalyst Hackathon?',
            answer: "The hackathon will be fully virtual! You can register at ",
            link: { url: '/', text: 'this link.' },
        },
        {
            question: 'How do I choose which track to attend?',
            answer: 'During registration, students will be allowed to choose which three out of the three tracks they\'d like to attend. For more information regarding each option, see either the Tracks section above or reference the registration application.',
            link: null,
        },
        {
            question: 'What is HexLabs?',
            answer: 'HexLabs is a student organization and 501(c)(3) non-profit at Georgia Tech devoted to Computer Science outreach in collegiate and high school communities. To learn more, check out our organization website ',
            link: { url: 'https://hexlabs.org', text: 'here.' },
        }
    ];

    return (
        <div className="faq p-10">
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
