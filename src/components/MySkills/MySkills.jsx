import React, { useState } from "react";

const mySkills = [
  { title: "CSS", percent: 80 },
  { title: "HTML", percent: 90 },
  { title: "JavaScript", percent: 75 },
  { title: "React", percent: 85 },
];

const MySkills = () => {
  const [skills, setSkill] = useState(mySkills);

  return (
    <div>
      {skills.map((skill) => (
        <div>
          <h1>{skill.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default MySkills;
