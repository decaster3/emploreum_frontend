/**
*
* SecondStepRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormRegisterSecondStep from './Form';

class SecondStepRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormRegisterSecondStep
          submitSecondStep={this.props.submitSecondStep}
        />
      </div>
    );
  }
}

SecondStepRegistration.propTypes = {
  submitSecondStep: PropTypes.func,
};

export default SecondStepRegistration;
