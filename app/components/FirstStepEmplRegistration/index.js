/**
*
* FirstStepEmplRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmployeeRegisterForm from './Form';

class FirstStepEmplRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <EmployeeRegisterForm
          submitFirstStep={this.props.submitFirstStep}
        />
      </div>
    );
  }
}
FirstStepEmplRegistration.propTypes = {
  submitFirstStep: PropTypes.func,
};

export default FirstStepEmplRegistration;
