import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSkills = (props) => {
  const { skills, deleteSkillFromSpecification, specification } = props;
  const choosenSkills = skills.map((item) => (
    <div key={item} className="col-md-3 col-sm-6">
      <div className="award-item">
        <div className="hexagon">
          <img src="/java.png" />
        </div>
        <span>{item}</span>
        <button onClick={() => deleteSkillFromSpecification(specification, item)}>
          <i className="fa fa-trash" />
        </button>
      </div>
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
