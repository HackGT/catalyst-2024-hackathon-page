import React from 'react';
import FAQItem from './FAQItem';

const FAQList = () => {
    const faqs = [
        {
            question: 'Who can attend?',
            answer: 'High school students from all across Georgia are welcome to register.',
            link: null,
        },
        {
            question: 'Where is Catalyst?',
            answer: "We'll be waiting for you at the ",
            link: { url: 'https://maps.google.com', text: 'LOCATION' }
        },
        {
            question: 'Do I need to bring anything to the learn-a-thon?',
            answer: 'Nope! We will provide food for every participant and laptops when necessary. Participants are welcome to bring their own devices.',
            link: null,
        },
        {
            question: 'Are parents allowed to come?',
            answer: 'Although we are grateful for parental support, Catalyst is a student-only event.',
            link: null,
        },
        {
            question: 'How do I choose which track to attend?',
            answer: 'During registration, students will be allowed to choose which of the four tracks they\'d like to attend. For more information regarding each option, see either the Tracks section above or reference the registration application.',
            link: null,
        },
        {
            question: 'What is HexLabs?',
            answer: 'HexLabs is a student organization and 501(c)(3) non-profit at Georgia Tech devoted to Computer Science outreach in collegiate and high school communities. To learn more, check out our organization website ',
            link: { url: 'https://hexlabs.org', text: 'here' },
        }
    ];

    return (
        <div className="faq p-10">
            <h2 className="text-5xl font-bold font-coco text-textColorDark text-center mb-8">FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} link={faq.link} />
                ))}
            </div>
        </div>
    );
};

export default FAQList;
