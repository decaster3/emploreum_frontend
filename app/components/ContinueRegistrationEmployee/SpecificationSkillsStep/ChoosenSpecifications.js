import React from 'react';
import PropTypes from 'prop-types';
import { LOADED } from '../../../containers/Registration/constants';
import Skills from './Skills';
const ChoosenSpecifications = (props) => {
  const {
    choosenSpecifications,
    addSkill,
    deleteSpecificationFromChoosen,
    deleteSkillFromSpecification } = props;
  let choosenSpec = <div>Choose specification please</div>;
  if (choosenSpecifications.toJS().length > 0) {
    choosenSpec = choosenSpecifications.toJS().map((item) => {
      if (item.possibleSkillsStatus === LOADED) {
        return (
          <div key={item.specification}>
            <h4>Specification: {item.specification}</h4>
            <button
              onClick={() => deleteSpecificationFromChoosen(item.specification)}
            >
              Delete spec {item.specification}
            </button>

            <Skills
              addSkill={addSkill}
              item={item}
              deleteSkillFromSpecification={deleteSkillFromSpecification}
            />
          </div>
        );
      }
      return (
        <div key={item.specification}>
          Skill is loading....
        </div>
      );
    });
  }
  return (
    <div>
      {choosenSpec}
    </div>
  );
};

ChoosenSpecifications.propTypes = {
  choosenSpecifications: PropTypes.object,
  addSkill: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
};

export default ChoosenSpecifications;
