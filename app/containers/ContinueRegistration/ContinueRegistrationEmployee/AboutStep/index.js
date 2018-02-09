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
  selectSubmitAboutButtonState,
} from '.././selectors';
import AboutStep from '../../../../components/ContinueRegistration/ContinueRegistrationCompany/AboutStep/Loadable';
import {
  submitAboutStep,
} from '.././actions';

export class AboutStepContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AboutStep
        submitAboutStep={this.props.submitAboutStep}
        submittingAbout={this.props.submittingAbout}
      />
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
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

AboutStepContainer.propTypes = {
  submitAboutStep: PropTypes.func,
  submittingAbout: PropTypes.bool,
};


export default compose(
  withConnect,
)(AboutStepContainer);
