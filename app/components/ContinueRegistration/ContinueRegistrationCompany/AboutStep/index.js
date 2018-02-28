/**
*
* AboutStep
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormRegistrationFourthStep from './Form/Loadable';
import AvatarEditor from '../../../AvatarEditor/Loadable';

class AboutStep extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="main-content">
        <div className="panel panel-headline col-md-8 col-md-offset-2">
          <div className="panel-body padding-bottom-30">
            <div id="preview" className="col-md-4">
              <AvatarEditor />
            </div>
            <div className="col-md-8">
              { this.props.children }
              <h4 className="heading">BIO</h4>
              <hr />
              <FormRegistrationFourthStep
                submitAboutStep={this.props.submitAboutStep}
                submittingAbout={this.props.submittingAbout}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AboutStep.propTypes = {
  submitAboutStep: PropTypes.func,
  submittingAbout: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AboutStep;
