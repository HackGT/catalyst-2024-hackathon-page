import React from 'react';

const GeorgiaTechSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 px-16 font-bubblegum text-left relative">
            <h2 className="text-3xl md:text-6xl text-textColor font-coco font-bold pb-3">IF YOU ARE A CURRENT GEORGIA TECH STUDENT</h2>
            <p className="text-xl md:text-3xl" >You're still able to participate in the event! Each year, GT students volunteer as mentors to help
                facilitate the projects and activities included in each available track. This is an opportunity for you to directly interact with high school students
                across Georgia, provide helpful knowledge to aspiring minds, and share your passion for computer science and engineering.</p>
            <p className="text-xl md:text-3xl pt-3">The core responsibilities of mentors include:</p>
            <ul className="text-xl md:text-3xl list-disc pl-6 space-y-1">
                <li>Co-leading a student cohort</li>
                <li>Encouraging mentees to network within cohorts</li>
                <li>Inspiring mentees to learn both during and after the event</li>
                <li>Arriving on-time and staying throughout the duration of the event</li>
            </ul>
            <p className="text-xl md:text-3xl pt-4">Mentor registration is opening soon!</p>
        </div>
    );
};

export default GeorgiaTechSection;