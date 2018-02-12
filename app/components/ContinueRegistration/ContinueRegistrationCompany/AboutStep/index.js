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
      <div className="main-content">
        <div className="panel panel-headline col-md-8 col-md-offset-2">
          <div className="panel-body padding-bottom-30">
            <h4 className="heading">BIO</h4>
            <hr />
            <FormRegistrationFourthStep
              submitAboutStep={this.props.submitAboutStep}
              submittingAbout={this.props.submittingAbout}
            />
          </div>
        </div>
      </div>
    );
  }
}

AboutStep.propTypes = {
  submitAboutStep: PropTypes.func,
  submittingAbout: PropTypes.bool,
};

export default AboutStep;
