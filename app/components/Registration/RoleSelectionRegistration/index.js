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
  const { changeRole } = props;
  return (
    <div>
      <div className="vertical-align-wrap">
        <div className="vertical-align-middle">
          <div className="auth-box">
            <div className="left">
              <div className="content">
                <div className="header">
                  <p className="lead">Choose your role</p>
                </div>
                <button className="btn btn-primary btn-sm btn-block" onClick={() => changeRole(COMPANY)}>Company</button>
                <button className="btn btn-primary btn-sm btn-block" onClick={() => changeRole(EMPLOYEE)}>Employee</button>
              </div>
            </div>
            <div className="right">
              <div className="overlay"></div>
              <div className="content text">
                <h1 className="heading">Присоединить к одной из 112344 успешной компании</h1>
                <p>Расти и зарабатывай больше</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RoleSelectionRegistration.propTypes = {
  changeRole: PropTypes.func,
};

export default RoleSelectionRegistration;
