/**
*
* Employee
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { BASEURL } from '../../../../global-constants';

export const Employee = (props) => {
  const {
    login,
    email,
    photoPath,
    startChat,
    id } = props;
  return (
    <div className="vacancy">
      <div className="row">
        <div className="inline col-md-2">
          <a className="thumbnail">
            <i className="fa text-avatar">{login.charAt(0).toUpperCase()}</i>
          </a>
          <h4>Alias: {login}</h4>
          <h4>Email: {email}</h4>
          <button className="btn btn-primary" onClick={() => startChat(id)}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};
//
Employee.propTypes = {
  email: PropTypes.string,
  login: PropTypes.string,
  photoPath: PropTypes.string,
  id: PropTypes.string,
  startChat: PropTypes.func,
};

export default Employee;
