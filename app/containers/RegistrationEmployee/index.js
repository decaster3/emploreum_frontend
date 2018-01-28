/**
 *
 * RegistrationEmployee
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectRegistrationStep,
  selectSpecificationList,
  selectSkillsList,
  selectRegistrationStepStatus,
  selectSpecificationListStatus,
  selectSkillsListStatus,
} from './selectors';
import reducer from './reducer';
import messages from './messages';
import FirstStep from '../../components/FirstStepEmplRegistration/Loadable';
import SecondStep from '../../components/SecondStepEmplRegistration/Loadable';
import ThirdStep from '../../components/ThirdStepEmplRegistration/Loadable';
import {
  addSkill,
  getRegistrationStep,
  submitFirstStep,
  submitSecondStep,
  getSpecification,
  getSkills,
  chooseSpecification,
} from './actions';
import {
  LOADING,
  NOT_LOADED,
  LOADED,
} from './constants';

export class RegistrationEmployee extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
                <FirstStep
                  submitFirstStep={this.props.submitFirstStep}
                />
              </div>
            );
          case 2:
            return (
              <div>
                <SecondStep
                  submitSecondStep={this.props.submitSecondStep}
                />
              </div>
            );
          case 3:
            return (
              <div>
                <ThirdStep
                  getSpecification={this.props.getSpecification}
                  getSkills={this.props.getSkills}
                  specificationListStatus={this.props.specificationListStatus}
                  skillsListStatus={this.props.skillsListStatus}
                  specificationList={this.props.specificationList}
                  skillsList={this.props.skillsList}
                  chooseSpecification={this.props.chooseSpecification}
                  addSkill={this.props.addSkill}
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
            <Helmet>
              <title>RegistrationEmployee</title>
              <meta name="description" content="Description of RegistrationEmployee" />
            </Helmet>
            <FormattedMessage {...messages.header} />
          </div>
        );
    }
  }
}

function mapStateToProps(state) {
  return {
    registrationStep: selectRegistrationStep(state),
    specificationList: selectSpecificationList(state),
    skillsList: selectSkillsList(state),
    registrationStepStatus: selectRegistrationStepStatus(state),
    specificationListStatus: selectSpecificationListStatus(state),
    skillsListStatus: selectSkillsListStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRegistrationStep: () => dispatch(getRegistrationStep()),
    submitFirstStep: (evt) => dispatch(submitFirstStep(evt)),
    submitSecondStep: (evt) => dispatch(submitSecondStep(evt)),
    getSpecification: () => dispatch(getSpecification()),
    getSkills: () => dispatch(getSkills()),
    chooseSpecification: (evt) => dispatch(chooseSpecification(evt)),
    addSkill: (evt, ev) => dispatch(addSkill(evt, ev)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'registrationEmployee', reducer });

RegistrationEmployee.propTypes = {
  getSpecification: PropTypes.func,
  getSkills: PropTypes.func,
  submitSecondStep: PropTypes.func,
  submitFirstStep: PropTypes.func,
  registrationStep: PropTypes.number,
  getRegistrationStep: PropTypes.func,
  specificationListStatus: PropTypes.string,
  skillsListStatus: PropTypes.string,
  skillsList: PropTypes.object,
  specificationList: PropTypes.object,
  registrationStepStatus: PropTypes.string,
  chooseSpecification: PropTypes.func,
  addSkill: PropTypes.func,
};


export default compose(
  withReducer,
  withConnect,
)(RegistrationEmployee);
