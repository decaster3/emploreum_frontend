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
          submitEmail={this.props.submitEmail}
          role={this.props.role}
        />
      </div>
    );
  }
}
FirstStepRegistration.propTypes = {
  submitEmail: PropTypes.func,
  role: PropTypes.string,
};

export default FirstStepRegistration;
