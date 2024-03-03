import React from 'react';

const GoalsSection = () => {
    return (
        <section className="my-4">
            <div className="max-w-3xl mx-auto p-4 text-left">
                <h2 className="text-3xl text-textColor font-coco font-bold pb-3">OUR GOALS</h2>
                <ul className="font-bubblegum list-disc pl-6">
                    <li>To foster connections between students with like-minded interest in computer science</li>
                    <li>To create a community beyond students' high schools for discussion, interaction, and innovation</li>
                    <li>To encourage the long-term development of students' ability to create impactful projects</li>
                </ul>
                <p className="font-bubblegum mt-4">
                    You can apply for the cohort when completing registration!
                </p>
            </div>
        </section>
    );
};

export default GoalsSection;
