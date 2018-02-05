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
          submitEmailVerification={this.props.submitEmailVerification}
        />
      </div>
    );
  }
}

SecondStepRegistration.propTypes = {
  submitEmailVerification: PropTypes.func,
};

export default SecondStepRegistration;
