import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSkill = (props) => {
  const { skillName, deleteSkill, specification } = props;
  return (
    <div className="col-md-3 col-sm-6">
      <div className="award-item">
        <div className="hexagon">
          <img src="/java.png" />
        </div>
        <span>{skillName}</span>
        <button onClick={() => deleteSkill(specification, skillName)}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

ChoosenSkill.propTypes = {
  skillName: PropTypes.string,
  deleteSkill: PropTypes.func,
  specification: PropTypes.string,
};

export default ChoosenSkill;
