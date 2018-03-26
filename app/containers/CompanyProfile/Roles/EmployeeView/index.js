/**
 *
 * EmployeeView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import About from '../../About/Loadable';
import CompanyOpenVacancies from '../../OpenVacancies/Loadable';
import MainInfromation from '../../MainInformation/Loadable';

export const EmployeeView = (props) => {
  const { match } = props;
  return (
    <div className="container-fluid">
      <div className="panel panel-profile" id="sticky-parent">
        <div className="profile-left" id="profile-left-panel">
          <MainInfromation
            companyProfileId={match.params.companyId}
          />
        </div>
        <div className="profile-right">
          <About companyProfileId={match.params.companyId} />
          <CompanyOpenVacancies companyProfileId={match.params.companyId} />
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

EmployeeView.propTypes = {
  match: PropTypes.object,
};

export default EmployeeView;
