/**
*
* AboutStep
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormRegistrationFourthStep from './Form/Loadable';

class AboutStep extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormRegistrationFourthStep
          submitAboutStep={this.props.submitAboutStep}
          submittingAbout={this.props.submittingAbout}
        />
      </div>
    );
  }
}

AboutStep.propTypes = {
  submitAboutStep: PropTypes.func,
  submittingAbout: PropTypes.bool,
};

export default AboutStep;
