/**
 *
 * EmployeeView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import About from '../../About';
import CompanyOpenVacancies from '../../OpenVacancies';
import MainInfromation from '../../MainInformation';
import Rating from '../../Rating';

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
          <Rating companyProfileId={match.params.companyId} />
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
