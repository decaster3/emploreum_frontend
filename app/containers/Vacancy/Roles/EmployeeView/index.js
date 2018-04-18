import React from 'react';
import PropTypes from 'prop-types';
import MainInfromation from '../../MainInformation';
import Skills from '../../Skills';
import EnrollEmployeeState from '../../EmployeeEnrollState';

export const EmployeeView = (props) => {
  const { match } = props;
  return (
    <div className="container-fluid">
      <div className="panel panel-profile" id="sticky-parent">
        <div className="profile-left" id="profile-left-panel">
          <MainInfromation vacancyId={match.params.id} />
          <EnrollEmployeeState vacancyId={match.params.id} />
        </div>
        <div className="profile-right">
          <Skills vacancyId={match.params.id} />
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
