/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectRegistrationStep,
  selectSpecificationList,
  selectRegistrationStepStatus,
  selectSpecificationListStatus,
  selectChoosenSpecifications,
} from './selectors';
import reducer from './reducer';
import SpecificationSkillsStep from '../../components/ContinueRegistrationEmployee/SpecificationSkillsStep/Loadable';
import AboutStep from '../../components/ContinueRegistrationEmployee/AboutStep/Loadable';
import {
  addSkill,
  getRegistrationStep,
  submitSpecificationSkillsStep,
  getSpecification,
  getSkills,
  addSpecificationWithSkills,
  deleteSpecificationFromChoosen,
  deleteSkillFromSpecification,
  submitAboutStep,
} from './actions';
import {
  LOADING,
  NOT_LOADED,
  LOADED,
} from './constants';

export class ContinueRegistrationEmployee extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getRegistrationStep();
  }
  render() {
    switch (this.props.registrationStepStatus) {
      case NOT_LOADED:
        return (
          <div>
            Error loading
          </div>
        );
      case LOADING:
        return (
          <div>
            Loadingggg
          </div>
        );
      case LOADED:
        switch (this.props.registrationStep) {
          case 1:
            return (
              <div>
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
                />
              </div>
            );
          case 2:
            return (
              <div>
                <AboutStep
                  submitAboutStep={this.props.submitAboutStep}
                />
              </div>
            );
          default:
            return (
              <div>
                Error
              </div>
            );
        }
      default:
        return (
          <div>
            Error
          </div>
        );
    }
  }
}

function mapStateToProps(state) {
  return {
    choosenSpecifications: selectChoosenSpecifications(state),
    registrationStep: selectRegistrationStep(state),
    specificationList: selectSpecificationList(state),
    registrationStepStatus: selectRegistrationStepStatus(state),
    specificationListStatus: selectSpecificationListStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRegistrationStep: () => dispatch(getRegistrationStep()),
    submitSpecificationSkillsStep: () => dispatch(submitSpecificationSkillsStep()),
    submitAboutStep: (evt, ev) => dispatch(submitAboutStep(evt, ev)),
    getSpecification: () => dispatch(getSpecification()),
    getSkills: () => dispatch(getSkills()),
    addSkill: (evt, ev) => dispatch(addSkill(evt, ev)),
    deleteSkillFromSpecification: (evt, ev) => dispatch(deleteSkillFromSpecification(evt, ev)),
    addSpecificationWithSkills: (evt) => dispatch(addSpecificationWithSkills(evt)),
    deleteSpecificationFromChoosen: (evt) => dispatch(deleteSpecificationFromChoosen(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'continueRegistrationEmployee', reducer });

ContinueRegistrationEmployee.propTypes = {
  getSpecification: PropTypes.func,
  getSkills: PropTypes.func,
  registrationStep: PropTypes.number,
  getRegistrationStep: PropTypes.func,
  specificationListStatus: PropTypes.string,
  skillsListStatus: PropTypes.string,
  skillsList: PropTypes.object,
  specificationList: PropTypes.object,
  registrationStepStatus: PropTypes.string,
  addSkill: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  submitSpecificationSkillsStep: PropTypes.func,
  submitAboutStep: PropTypes.func,
  choosenSpecifications: PropTypes.object,
};


export default compose(
  withReducer,
  withConnect,
)(ContinueRegistrationEmployee);
