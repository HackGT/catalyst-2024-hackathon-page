import React from 'react';
// import Stingray from '../../images/Stingray.svg'

const AboutSection = () => {
    return (
        <section id="about" className="my-4">
            <div className="max-w-7xl mx-auto p-4 px-16 text-left font-bubblegum">
                <h2 className="text-4xl md:text-6xl text-textColor font-coco font-bold text-left pb-3">ABOUT</h2>
                <div className="text-xl md:text-3xl">
                    <p className="">HexLabs presents Catalyst Hacks, a virtual hackathon for high schoolers out of Georgia Tech! Join us online from Friday, November 8th, to Sunday, November 11th, to collaborate with other passionate students and build an exciting project.</p>
                    <p className="pt-3">Catalyst, our high school learn-a-thon that takes place in the spring, was brought into existence in 2018, and from the beginning of this event, HexLabs has hosted over 500 students on campus for the chance to participate in exciting workshops, collaborate with dedicated students from other schools, and network with speakers and college students. This fall, we’re so excited to bring you a virtual hackathon for the first time!</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
