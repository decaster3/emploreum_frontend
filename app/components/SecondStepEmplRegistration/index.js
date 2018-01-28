/**
*
* SecondStepEmplRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmployeeRegisterForm from './Form';

class SecondStepEmplRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <EmployeeRegisterForm
          submitSecondStep={this.props.submitSecondStep}
        />
      </div>
    );
  }
}

SecondStepEmplRegistration.propTypes = {
  submitSecondStep: PropTypes.func,
};

export default SecondStepEmplRegistration;
