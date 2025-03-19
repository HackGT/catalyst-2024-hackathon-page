import React from "react";

const ExpectSection = () => {
  return (
    <section className="my-16">
      <div className="max-w-8xl ml-20 p-4 px-16 text-left">
        <h2 className="text-3xl md:text-6xl text-textColor font-racesport font pb-3">
          WHAT TO EXPECT
        </h2>
        <p className="text-xl md:text-xl font-jetbrains text-textColor">
          At Catalyst, high school students can look forward to a day packed with activities and opportunities to explore
           key areas of computer science. The event will be divided into two main segments: <b>morning workshops</b> 
           and <b>afternoon idea-thon tracks</b>.
        </p>
        <p className="text-xl md:text-xl font-jetbrains text-textColor pt-3">
          The <b>morning workshops</b> will feature interactive sessions led by experienced mentors and professionals. 
          These workshops are designed to provide hands-on learning experiences in foundational computer science 
          concepts and practical skills. These sessions are beginner-friendly while also challenging more advanced 
          students to expand their knowledge.
        </p>
        <p className="text-xl md:text-xl font-jetbrains text-textColor pt-3">
          Later, the focus will shift to the <b>afternoon idea-thon tracks</b> where students will work in groups 
          within chosen tracks: <b>AI, Sustainability Tech, Health Tech</b>. Guided by mentors with expertise 
          in these areas, participants will brainstorm creative solutions to real-world problems, developing 
          their ideas into practical prototypes or actionable plans. Teams will have access to resources, tools, 
          and structured checkpoints to ensure progress throughout the session. At the end of the idea-thon, 
          participants will showcase their projects to a panel of judges who will provide feedback and recognize contributions.
        </p>
        <p className="text-xl md:text-xl font-jetbrains text-textColor pt-3">
          Throughout the day, students will also have the chance to connect with peers who share similar interests, 
          gain insights from guest speakers, and build confidence in applying computer science to solve meaningful 
          challenges. Whether you're a coding novice or a tech enthusiast, Catalyst is designed to spark your 
          curiosity and inspire creativity in a supportive and collaborative environment.
        </p>
      </div>
    </section>
  );
};

export default ExpectSection;
