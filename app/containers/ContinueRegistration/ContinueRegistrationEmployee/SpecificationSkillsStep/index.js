/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  selectSpecificationList,
  selectSpecificationListStatus,
  selectChoosenSpecifications,
  selectSubmitSpecificationButtonState,
} from '../selectors';

import SpecificationSkillsStep from '../../../../components/ContinueRegistration/ContinueRegistrationEmployee/SpecificationSkillsStep/Loadable';
import {
  addSkill,
  submitSpecificationSkillsStep,
  getSpecification,
  getSkills,
  addSpecificationWithSkills,
  deleteSpecificationFromChoosen,
  deleteSkillFromSpecification,
} from '../actions';

export class SpecificationSkills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SpecificationSkillsStep
        getSpecification={this.props.getSpecification}
        getSkills={this.props.getSkills}
        specificationListStatus={this.props.specificationListStatus}
        skillsListStatus={this.props.skillsListStatus}
        specificationList={this.props.specificationList}
        skillsList={this.props.skillsList}
        addSkill={this.props.addSkill}
        addSpecificationWithSkills={this.props.addSpecificationWithSkills}
        choosenSpecifications={this.props.choosenSpecifications}
        deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
        deleteSkillFromSpecification={this.props.deleteSkillFromSpecification}
        submitSpecificationSkillsStep={this.props.submitSpecificationSkillsStep}
        submittingSpecification={this.props.submittingSpecification}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    choosenSpecifications: selectChoosenSpecifications(state),
    specificationList: selectSpecificationList(state),
    specificationListStatus: selectSpecificationListStatus(state),
    submittingSpecification: selectSubmitSpecificationButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitSpecificationSkillsStep: () => dispatch(submitSpecificationSkillsStep()),
    getSpecification: () => dispatch(getSpecification()),
    getSkills: () => dispatch(getSkills()),
    addSkill: (evt, ev) => dispatch(addSkill(evt, ev)),
    deleteSkillFromSpecification: (evt, ev) => dispatch(deleteSkillFromSpecification(evt, ev)),
    addSpecificationWithSkills: (evt) => dispatch(addSpecificationWithSkills(evt)),
    deleteSpecificationFromChoosen: (evt) => dispatch(deleteSpecificationFromChoosen(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

SpecificationSkills.propTypes = {
  getSpecification: PropTypes.func,
  getSkills: PropTypes.func,
  specificationListStatus: PropTypes.string,
  skillsListStatus: PropTypes.string,
  skillsList: PropTypes.object,
  specificationList: PropTypes.object,
  addSkill: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  submitSpecificationSkillsStep: PropTypes.func,
  submittingSpecification: PropTypes.bool,
  choosenSpecifications: PropTypes.object,
};


export default compose(
  withConnect,
)(SpecificationSkills);
