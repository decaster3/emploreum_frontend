/**
 *
 * Registration
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
  selectRegistrationStepStatus,
  selectSpecificationListStatus,
  selectChoosenSpecifications,
  selectRole,
} from './selectors';
import reducer from './reducer';
import messages from './messages';
import FirstStep from '../../components/FirstStepRegistration/Loadable';
import SecondStep from '../../components/SecondStepRegistration/Loadable';
import ThirdStep from '../../components/ThirdStepRegistration/Loadable';
import FourthStep from '../../components/FourthStepRegistration/Loadable';
import {
  addSkill,
  getRegistrationStep,
  submitFirstStep,
  submitSecondStep,
  submitThirdStep,
  getSpecification,
  getSkills,
  addSpecificationWithSkills,
  deleteSpecificationFromChoosen,
  deleteSkillFromSpecification,
  submitFourthStep,
} from './actions';
import {
  LOADING,
  NOT_LOADED,
  LOADED,
} from './constants';

export class Registration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(123);
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
                  role={this.props.role}
                />
              </div>
            );
          case 2:
            return (
              <div>
                <SecondStep
                  submitSecondStep={this.props.submitSecondStep}
                  role={this.props.role}
                />
              </div>
            );
          case 3:
            return (
              <div>
                <ThirdStep
                  role={this.props.role}
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
                  submitThirdStep={this.props.submitThirdStep}
                />
              </div>
            );
          case 4:
            return (
              <div>
                <FourthStep
                  submitFourthStep={this.props.submitFourthStep}
                  role={this.props.role}/>
              </div>
            )
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
              <title>Registration</title>
              <meta name="description" content="Description of Registration" />
            </Helmet>
            <FormattedMessage {...messages.header} />
          </div>
        );
    }
  }
}

function mapStateToProps(state) {
  return {
    role: selectRole(state),
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
    submitFirstStep: (evt) => dispatch(submitFirstStep(evt)),
    submitSecondStep: (evt) => dispatch(submitSecondStep(evt)),
    submitThirdStep: () => dispatch(submitThirdStep()),
    submitFourthStep: (evt, ev) => dispatch(submitFourthStep(evt, ev)),
    getSpecification: () => dispatch(getSpecification()),
    getSkills: () => dispatch(getSkills()),
    addSkill: (evt, ev) => dispatch(addSkill(evt, ev)),
    deleteSkillFromSpecification: (evt, ev) => dispatch(deleteSkillFromSpecification(evt, ev)),
    addSpecificationWithSkills: (evt) => dispatch(addSpecificationWithSkills(evt)),
    deleteSpecificationFromChoosen: (evt) => dispatch(deleteSpecificationFromChoosen(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'registration', reducer });

Registration.propTypes = {
  role: PropTypes.string,
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
  addSkill: PropTypes.func,
  addSpecificationWithSkills: PropTypes.func,
  deleteSpecificationFromChoosen: PropTypes.func,
  deleteSkillFromSpecification: PropTypes.func,
  submitThirdStep: PropTypes.func,
  submitFourthStep: PropTypes.func,
  choosenSpecifications: PropTypes.object,
};


export default compose(
  withReducer,
  withConnect,
)(Registration);
