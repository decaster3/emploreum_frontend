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
            <div className="form-inline">
              <div className="form-group">
                <h4 className="heading">{item.specification} developer</h4>
              </div>
              <div className="form-group" style={{ marginLeft: 20 }}>
                <a href="#" className="btn btn-default btn-xs">
                  <button
                    onClick={() => deleteSpecificationFromChoosen(item.specification)}
                  >
                    <i className="fa fa-trash" />
                  </button>
                </a>
              </div>
            </div>
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
