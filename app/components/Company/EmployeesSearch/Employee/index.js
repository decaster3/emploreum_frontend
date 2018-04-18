/**
*
* Employee
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/src/moment';
import EmployeeProfileLink from '../../../../containers/EmployeeProfile/preload';
import { BASEURL } from '../../../../global-constants';
import { ANONYMOUS } from '../../../../containers/UserSession/constants';

export const Employee = (props) => {
  const {
    specifications,
    photoPath,
    skills,
    name,
    userState,
    createdAt,
    id } = props;
  const url = userState === ANONYMOUS ? `/employee/${id}` : `/company/employee/${id}`;
  const since = moment(createdAt).format('LL');
  return (
    <EmployeeProfileLink url={url} id={id}>
      <div className="vacancy">
        <div className="row">
          <div className="inline col-md-2">
            <div className="thumbnail">
              <img src={BASEURL + photoPath} alt="user avatar" />
            </div>
            <h4>{name}</h4>
          </div>
          <div className="col-md-10">
            <div className="vacancy-name">
              <p> { specifications || 'Profiles...'}</p>
              <div className="vacancy-currency">
                <p>{skills || 'Skils...'}</p>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="vacancy-desc">
          <div className="vacancy-add">
            <p>Details</p>
          </div>
          <div className="vacancy-contact">
            <p>Contacts</p>
          </div>
          <div className="vacancy-date">
            On Emploreum since {since}
          </div>
        </div>
      </div>
    </EmployeeProfileLink>
  );
};
//
Employee.propTypes = {
  userState: PropTypes.string,
  specifications: PropTypes.string,
  skills: PropTypes.string,
  photoPath: PropTypes.string,
  createdAt: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Employee;
