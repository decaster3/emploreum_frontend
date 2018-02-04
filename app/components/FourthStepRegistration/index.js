/**
*
* FourthStepRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FormRegistrationFourthStep from './Form';

class FourthStepRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormRegistrationFourthStep
          submitFourthStep={this.props.submitFourthStep}
          role={this.props.role}
        />
      </div>
    );
  }
}

FourthStepRegistration.propTypes = {
  submitFourthStep: PropTypes.func,
};

export default FourthStepRegistration;
