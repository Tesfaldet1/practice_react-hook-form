import React, { useState } from "react";

const Skill = () => {
  const initialState = [
    { id: "1", title: "Java SE" },
    { id: "2", title: "Java EE" },
  ];
  const [skills, setSkills] = useState(initialState);
  return (
    <ul>
      <li>Java SE</li>
      <li>Java EE</li>
      <li>React</li>
      <li>SQL</li>
    </ul>
  );
};
export default Skill;
