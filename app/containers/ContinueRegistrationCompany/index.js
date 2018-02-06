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
import SpecificationSkillsStep from '../../components/ContinueRegistrationCompany/SpecificationSkillsStep/Loadable';
import AboutStep from '../../components/ContinueRegistrationCompany/AboutStep/Loadable';
import {
  getRegistrationStep,
  getSpecification,
  addSpecificationWithSkills,
  deleteSpecificationFromChoosen,
  submitAboutStep,
  submitSpecificationSkillsStep,
} from './actions';
import {
  LOADING,
  NOT_LOADED,
  LOADED,
} from './constants';

export class ContinueRegistrationCompany extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
            Loading
          </div>
        );
      case LOADED:
        switch (this.props.registrationStep) {
          case 1:
            return (
              <div>
                <SpecificationSkillsStep
                  getSpecification={this.props.getSpecification}
                  specificationListStatus={this.props.specificationListStatus}
                  specificationList={this.props.specificationList}
                  addSpecificationWithSkills={this.props.addSpecificationWithSkills}
                  choosenSpecifications={this.props.choosenSpecifications}
                  deleteSpecificationFromChoosen={this.props.deleteSpecificationFromChoosen}
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
    addSpecificationWithSkills: (evt) => dispatch(addSpecificationWithSkills(evt)),
    deleteSpecificationFromChoosen: (evt) => dispatch(deleteSpecificationFromChoosen(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'continueRegistrationCompany', reducer });

ContinueRegistrationCompany.propTypes = {
  getSpecification: PropTypes.func,
  registrationStep: PropTypes.number,
  getRegistrationStep: PropTypes.func,
  specificationListStatus: PropTypes.string,
  specificationList: PropTypes.object,
  registrationStepStatus: PropTypes.string,
  deleteSpecificationFromChoosen: PropTypes.func,
  submitAboutStep: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  submitSpecificationSkillsStep: PropTypes.func,
  choosenSpecifications: PropTypes.object,
};


export default compose(
  withReducer,
  withConnect,
)(ContinueRegistrationCompany);
