import React from 'react';
import FAQItem from './FAQItem';
import BottomTire from '../../images/Bottom-tire.svg';
import TopTire from '../../images/Top-tire.svg';
import LeftCone from '../../images/Left-cone.svg';
import RightCone from '../../images/Right-cone.svg';

const FAQList = () => {
    const faqs = [
        {
            question: 'What is HexLabs?',
            answer: 'HexLabs is a student organization and 501(c)(3) non-profit at Georgia Tech devoted to Computer Science outreach in collegiate and high school communities. To learn more, check out our organization website ',
            link: { url: 'https://hexlabs.org', text: 'here.' },
        },
        {
            question: 'Who can attend?',
            answer: 'High school students from all across Georgia are welcome to register.',
            link: null,
        },
        {
            question: 'Where is Catalyst?',
            answer: (
                <>
                    We'll be waiting for you at the <a href='https://maps.google.com/?q=Instructional+Center' target='_blank' rel="noopener noreferrer" style={{ color: '#4A90E2', textDecoration: 'underline' }}>Instructional Center</a>.
                </>
            ),
            link: { url: 'https://maps.google.com/?q=Instructional+Center' }
        },
        {
            question: 'How do I choose which track to attend?',
            answer: 'During registration, students will be allowed to choose which of the three tracks they\'d like to attend. For more information regarding each option, see either the Tracks section above or reference the registration application.',
            link: null,
        },
        {
            question: 'Do I need to bring anything to the idea-thon?',
            answer: 'We will provide food for every participant. Participants are expected to bring their own laptops, if necessary, we can provide a limited amount.',
            link: null,
        }
    ];

    return (
        <div className="faq p-8 bg-[#0F0D2E]">
            <div className="flex justify-between items-center mb-8 pb-8">
                <div className="flex-1 flex justify-center">
                    <img src={LeftCone} alt="Left" className="w-50" />
                </div>
                <div className="flex-1 flex justify-center">
                    <h2 className="text-white text-[40px] font-racesport leading-[40px] uppercase transform translate-y-10">PIT STOP!! (FAQ)</h2>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <img src={BottomTire} alt="Tire" className="w-45 -mb-20 z-10 -mr-8 transform translate-x-10" />
                            <img src={TopTire} alt="Tire" className="w-30 -mt-20 -ml-20 z-10 transform translate-x-10 translate-y-6" />
                            <img src={RightCone} alt="Cone" className="w-50 -ml-10 z-0" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[64px] w-[1183px] mx-auto">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} link={faq.link} />
                ))}
            </div>
        </div>
    );
};

export default FAQList;