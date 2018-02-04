/**
*
* FirstStepEmplRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormRegisterFirstStep from './Form';

class FirstStepRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormRegisterFirstStep
          submitFirstStep={this.props.submitFirstStep}
          role={this.props.role}
        />
      </div>
    );
  }
}
FirstStepRegistration.propTypes = {
  submitFirstStep: PropTypes.func,
  role: PropTypes.string,
};

export default FirstStepRegistration;
