/**
*
* SpecificationSkillsStep
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LOADED } from '../../../containers/Registration/constants';
import AutoComplete from './AutoComplete';
import ChoosenSpecifications from './ChoosenSpecifications';

class SpecificationSkillsStep extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSpecification();
  }
  render() {
    switch (this.props.specificationListStatus) {
      case LOADED:
        return (
          <div>
            <AutoComplete
              addItem={this.props.addSpecificationWithSkills}
              list={this.props.specificationList}
              whatToAdd={'specification'}
            />
            <ChoosenSpecifications
              choosenSpecifications={this.props.choosenSpecifications}
              addSkill={this.props.addSkill}
              deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
              deleteSkillFromSpecification={this.props.deleteSkillFromSpecification}
            />
            <button onClick={() => this.props.submitSpecificationSkillsStep()}>Next</button>
          </div>
        );
      default:
        return (
          <div>
            Loadingy
          </div>
        );
    }
  }
}

SpecificationSkillsStep.propTypes = {
  specificationList: PropTypes.object,
  getSpecification: PropTypes.func,
  submitSpecificationSkillsStep: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  addSkill: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  specificationListStatus: PropTypes.string,
  choosenSpecifications: PropTypes.object,
};

export default SpecificationSkillsStep;
