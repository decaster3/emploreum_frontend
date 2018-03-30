/**
 *
 * CompanyView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import MainInfromation from '../../MainInformation';
import Skills from '../../Skills';
import InviteEmployee from '../../InviteEmployee';
// import Rating from '../../Rating/Loadable';

export const CompanyView = (props) => {
  const { match } = props;
  return (
    <div className="container-fluid">
      <div className="panel panel-profile" id="sticky-parent">
        <div className="profile-left" id="profile-left-panel">
          <MainInfromation
            employeeId={match.params.id}
          />
          <InviteEmployee
            employeeId={match.params.id}
          />
          <div className="col-md-12 text-center padding-bottom-30">
            <a
              href=""
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modal-invite-employee"
            >
            Invite Employee
          </a>
          </div>
        </div>
        <div className="profile-right">
          <Skills
            employeeId={match.params.id}
          />
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

CompanyView.propTypes = {
  match: PropTypes.object,
};

export default CompanyView;
