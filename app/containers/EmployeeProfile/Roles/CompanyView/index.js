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
  console.log(match.params.id)
  return (
    <div className="container-fluid">
      <div className="panel panel-profile" id="sticky-parent">
        <div className="profile-left" id="profile-left-panel">
          <MainInfromation
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
