import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import AutoComplete from './AutoComplete';
import ChoosenSkills from './ChoosenSkills';

const Skills = (props) => {
  const { addSkill, item, deleteSkillFromSpecification } = props;
  return (
    <div>
      <AutoComplete
        addItem={addSkill}
        list={fromJS(item.possibleSkills)}
        whatToAdd={'skill'}
        specification={item.specification}
      />
      {item.items && item.items.length ?
        <div className="awards">
          <div className="row">
            <ChoosenSkills
              skills={item.items}
              deleteSkillFromSpecification={deleteSkillFromSpecification}
              specification={item.specification}
            />
          </div>
        </div>
      :
        <div />
      }
    </div>
  );
};

Skills.propTypes = {
  addSkill: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  item: PropTypes.object,
};

export default Skills;
