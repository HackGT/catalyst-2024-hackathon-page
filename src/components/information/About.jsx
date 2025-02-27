import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="bg-[#0B0B28] text-white py-16">
            <div className="max-w-6xl mx-auto"> {/* Changed to match Goals section container */}
                <h2 className="text-4xl md:text-5xl font-racesport text-white uppercase pb-6 tracking-wider text-left"> 
                    About
                </h2>
                <div className="text-lg md:text-xl font-jetbrains leading-relaxed text-left w-[70%]"> {/* Moved w-[70%] here */}
                    <p>
                        HexLabs presents Catalyst Hacks, a virtual hackathon for high schoolers out of Georgia Tech! 
                        Join us online from Friday, November 8th, to Sunday, November 11th, to collaborate with 
                        other passionate students and build an exciting project.
                    </p>
                    <p className="pt-4">
                        Catalyst, our high school learn-a-thon that takes place in the spring, was brought into 
                        existence in 2018, and from the beginning of this event, HexLabs has hosted over 500 
                        students on campus for the chance to participate in exciting workshops, collaborate with 
                        dedicated students from other schools, and network with speakers and college students. 
                        This fall, we're so excited to bring you a virtual hackathon for the first time!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;