/**
*
* ThirdStepRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LOADED } from '../../containers/Registration/constants';
import AutoComplete from './AutoComplete';
import ChoosenSpecifications from './ChoosenSpecifications';

class ThirdStepRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
              role={this.props.role}
              choosenSpecifications={this.props.choosenSpecifications}
              addSkill={this.props.addSkill}
              deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
              deleteSkillFromSpecification={this.props.deleteSkillFromSpecification}
            />
          <button onClick={() => this.props.submitThirdStep()}>Next</button>
          </div>
        );
      default:
        return (
          <div>
            Loading
          </div>
        );
    }
  }
}

ThirdStepRegistration.propTypes = {
  role: PropTypes.string,
  specificationList: PropTypes.object,
  getSpecification: PropTypes.func,
  submitThirdStep: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  addSkill: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  specificationListStatus: PropTypes.string,
  choosenSpecifications: PropTypes.object,
};

export default ThirdStepRegistration;
