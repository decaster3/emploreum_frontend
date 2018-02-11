import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSkill = (props) => {
  const { skill, skillName, deleteSkill, specification } = props;
  return (
    <div className="col-md-3 col-sm-6">
      <div className="award-item">
        <div className="hexagon">
          <img src="/java.png" />
        </div>
        <span>{skillName}</span>
        <button onClick={() => deleteSkill(specification, skill)}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

ChoosenSkill.propTypes = {
  skillName: PropTypes.string,
  skill: PropTypes.object,
  deleteSkill: PropTypes.func,
  specification: PropTypes.object,
};

export default ChoosenSkill;
