import React from 'react';

const GeorgiaTechSection = () => {
    return (
        <section className="my-4">
            <div className="max-w-3xl mx-auto p-4 font-bubblegum text-left">
                <h2 className="text-3xl text-textColor font-coco font-bold pb-3">IF YOU ARE A CURRENT GEORGIA TECH STUDENT</h2>
                <p>You're still able to participate in the event! Each year, GT students volunteer as mentors to help
                    facilitate the projects and activities included in each available track. This is an opportunity for you to directly interact with high school students
                    across Georgia, provide helpful knowledge to aspiring minds, and share your passion for computer science and engineering.</p>
                <p className="pt-2">The core responsibilities of mentors include:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Co-leading a student cohort</li>
                    <li>Encouraging mentees to network within cohorts</li>
                    <li>Inspiring mentees to learn both during and after the event</li>
                    <li>Arriving on-time and staying throughout the duration of the event</li>
                </ul>
                <p className="pt-4">Mentor registration is opening soon!</p>
            </div>
        </section>
    );
};

export default GeorgiaTechSection;
