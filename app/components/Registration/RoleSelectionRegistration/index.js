/**
*
* RoleSelectionRegistration
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  EMPLOYEE,
  COMPANY,
} from '../../../containers/Registration/constants';
// import styled from 'styled-components';


const RoleSelectionRegistration = (props) => { // eslint-disable-line react/prefer-stateless-function
  const { changeRole } = props
  return (
    <div>
        <button onClick={() => changeRole(COMPANY)}>Company register</button>
        <button onClick={() => changeRole(EMPLOYEE)}>Employee register</button>
    </div>
  );
}

RoleSelectionRegistration.propTypes = {
  changeRole: PropTypes.func,
};

export default RoleSelectionRegistration;
