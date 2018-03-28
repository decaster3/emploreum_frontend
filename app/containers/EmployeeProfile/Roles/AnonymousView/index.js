/**
 *
 * AnonymousView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import MainInfromation from '../../MainInformation/Loadable';
import Skills from '../../Skills/Loadable';
import Login from '../../../UserSession/Loadable';
import Rating from '../../Rating/Loadable';
// import '../../../../assets/css/index.css';
export const AnonymousView = (props) => {
  const { match } = props;
  return (
    <div className="container-fluid">
      <div className="panel panel-profile" id="sticky-parent">
        <div className="profile-left" id="profile-left-panel">
          <MainInfromation
            employeeId={match.params.id}
          />
          <Login modal />
          <div className="col-md-12 text-center padding-bottom-30">
            <a
              href=""
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modal-login"
            >
            Invite Employee
          </a>
          </div>
        </div>
        <div className="profile-right">
          <Rating employeeId={match.params.id} />
          <Skills
            employeeId={match.params.id}
          />
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

AnonymousView.propTypes = {
  match: PropTypes.object,
};

export default AnonymousView;
