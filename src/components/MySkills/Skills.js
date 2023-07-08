import React, { useState } from "react";

const Skills = () => {
  const [skills] = useState([
    {
      title: "HTML",
      percent: "95",
    },
    {
      title: "CSS",
      percent: "70",
    },
    {
      title: "Tailwind CSS",
      percent: "90",
    },
    {
      title: "Bootstrap",
      percent: "95",
    },
    {
      title: "JavaScript",
      percent: "70",
    },
    {
      title: "React js",
      percent: "65",
    },
    {
      title: "nodejs",
      percent: "50",
    },
    {
      title: "Figma",
      percent: "40",
    },
    {
      title: "mongoDB",
      percent: "80",
    },
  ]);

  const [currentSkill, setCurrentSkill] = useState({
    title: "HTML",
    percent: "95",
  });

  const handleSkillClick = (skill) => {
    setCurrentSkill(skill);
  };

  return (
    <div>
      <h1 id="title" className="font-bold mt-10 mb-10  text-black text-4xl">
        Core Skills
      </h1>
      <hr className="w-1/2 mx-auto" />
      <main className="grid w-full  text-black  place-content-center">
        <section className="p-6 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
              <button
                key={skill.title}
                onClick={() => handleSkillClick(skill)}
                className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44  ${
                  currentSkill.title === skill.title
                    ? "font-bold bg-purple-800"
                    : ""
                }`}
              >
                {skill.title}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <svg className="transform -rotate-90 w-72 h-72">
              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="30"
                fill="transparent"
                className="text-gray-700"
              />

              <circle
                cx="145"
                cy="145"
                r="120"
                stroke="currentColor"
                strokeWidth="30"
                fill="transparent"
                strokeDasharray={2 * (22 / 7) * 120}
                strokeDashoffset={
                  (2 * (22 / 7) * 120 * (100 - currentSkill.percent)) / 100
                }
                className="text-purple-800"
              />
            </svg>
            <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skills;
