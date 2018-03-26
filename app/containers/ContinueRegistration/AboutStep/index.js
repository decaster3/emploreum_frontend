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
import reducer from './reducer';

import {
  selectSubmitAboutButtonState,
} from './selectors';
import AboutStep from './../../../components/ContinueRegistration/ContinueRegistrationCompany/AboutStep/Loadable';
import LanguageSelector from './LanguageSelector/Loadable';

import {
  submitAboutStep,
  chooseAvatar,
} from './actions';
import {
  skipLastStep,
} from '../../UserSession/actions';

export class AboutStepContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AboutStep
          submitAboutStep={this.props.submitAboutStep}
          submittingAbout={this.props.submittingAbout}
          chooseAvatar={this.props.chooseAvatar}
        >
          <LanguageSelector />
        </AboutStep>
        <button onClick={() => this.props.skipLastStep()} className="btn btn-default">End registration</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    submittingAbout: selectSubmitAboutButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitAboutStep: (evt, ev) => dispatch(submitAboutStep(evt, ev)),
    chooseAvatar: (evt) => dispatch(chooseAvatar(evt)),
    skipLastStep: () => dispatch(skipLastStep()),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'continueRegistrationAbout', reducer });

AboutStepContainer.propTypes = {
  submitAboutStep: PropTypes.func,
  skipLastStep: PropTypes.func,
  chooseAvatar: PropTypes.func,
  submittingAbout: PropTypes.bool,
};

export default compose(
  withReducer,
  withConnect,
)(AboutStepContainer);
