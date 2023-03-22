import React, { useState } from "react";

const Skill = () => {
  const initialState = [
    { id: "1", title: "Java SE" },
    { id: "2", title: "Java EE" },
  ];
  const [skills, setSkills] = useState(initialState);
  return (
    <ul className="row pb-2">
      {skills.map((skill) => {
        return <li key={skill.id}>{skill.title}</li>;
      })}
    </ul>
  );
};
export default Skill;
