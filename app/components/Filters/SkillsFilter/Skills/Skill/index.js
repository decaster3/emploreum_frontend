/**
*
* Skill
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const Skill = (props) => {
  const { deleteSkill, skill } = props;
  return (
    <div>
      { skill.name }
      <button
        onClick={() => deleteSkill(skill)}
      >
        x
      </button>
    </div>
  );
};

Skill.propTypes = {
  deleteSkill: PropTypes.func,
  skill: PropTypes.object,
};

export default Skill;
