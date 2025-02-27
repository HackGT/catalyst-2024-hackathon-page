import React from 'react';

const goals = [
    { icon: "🏆", text: "To Encourage The Development Of Innovative And Impactful Projects" },
    { icon: "🛞", text: "To Create A Community For Discussion, Interaction, And Innovation" },
    { icon: "🏎️", text: "To Foster Connections Between Students With Like-Minded Interest In Computer Science" },
    { icon: "🛑", text: "To Build A Safe Space For Development And Competition" }
];

const goals = [
    { icon: "🏆", text: "To Encourage The Development Of Innovative And Impactful Projects" },
    { icon: "🛞", text: "To Create A Community For Discussion, Interaction, And Innovation" },
    { icon: "🏎️", text: "To Foster Connections Between Students With Like-Minded Interest In Computer Science" },
    { icon: "🛑", text: "To Build A Safe Space For Development And Competition" }
];

const GoalsSection = () => {
    return (
        <section id="goals" className="bg-[#0B0B28] text-white py-16 px-16">
            <div className="max-w-6xl mx-auto"> {/* Changed from max-w-7xl to max-w-6xl */}
                <h2 className="text-4xl md:text-5xl font-racesport uppercase pb-8 tracking-wider text-left">
                    Our Goals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Increased gap from 6 to 8 */}
                    {goals.map((goal, index) => (
                        <div key={index} className="bg-[#16163A] rounded-xl p-4 shadow-lg text-center border border-[#C0C0C0] w-full max-w-[250px] mx-auto"> {/* Added max-w-[250px] and mx-auto */}
                            <div className="text-5xl">{goal.icon}</div>
                            <p className="text-lg md:text-xl font-jetbrains leading-relaxed pt-4">
                                {goal.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoalsSection;