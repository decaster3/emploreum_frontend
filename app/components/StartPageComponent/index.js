/**
*
* StartPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  EMPLOYEE,
  COMPANY,
} from '../../containers/Registration/constants';


const StartPageComponent = (props) => {
  const { changeRole } = props;
  return (
    <div>
      <Link to="/registration">
        <button onClick={() => changeRole(COMPANY)}>Company register</button>
      </Link>
      <Link to="/registration">
        <button onClick={() => changeRole(EMPLOYEE)}>Employee register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/employee">
        <button>employeeProfile</button>
      </Link>
    </div>
  );
};

StartPageComponent.propTypes = {
  changeRole: PropTypes.func,
};

export default StartPageComponent;
