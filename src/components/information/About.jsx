import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="my-16 w-custom">
      <div className="ml-20 p-4 px-16 text-left text-textColor font-jetbrains">
        <h2 className="text-4xl md:text-6xl text-textColor font-racesport text-left pb-3">
          ABOUT
        </h2>
        <div className="text-xl md:text-xl">
          <p className="">
            <b>HexLabs presents Catalyst – an idea-thon for high schoolers hosted at Georgia Tech!</b>{" "}
          </p>
          <p className="pt-3">
            Join us on <b>Saturday, April 12th, 2025,</b> for a day of innovation, collaboration, and creativity. 
            Work alongside passionate students to learn more about the fundamentals of STEAM, receive mentorship 
            from college students and other industry professionals, and participate in fun competitions!{" "}
          </p>
          <p className="pt-3">
            Since its inception in 2018, Catalyst has welcomed over <b>500 students</b> to Georgia Tech, offering 
            engaging workshops, networking opportunities with industry professionals and college students, 
            and the chance to collaborate with like-minded peers. This spring, we’re thrilled to introduce 
            our <b>first-ever idea-thon</b>, expanding access to even more aspiring innovators
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
