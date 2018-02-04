import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSkills = (props) => {
  const { skills, deleteSkillFromSpecification, specification } = props;
  const choosenSkills = skills.map((item) => (
    <div key={item}>
      {item}
      <button onClick={() => deleteSkillFromSpecification(specification, item)}>Delete Skill {item}</button>
    </div>
  ));
  return choosenSkills;
};

ChoosenSkills.propTypes = {
  skills: PropTypes.array,
  deleteSkillFromSpecification: PropTypes.func,
  specification: PropTypes.string,
};

export default ChoosenSkills;
