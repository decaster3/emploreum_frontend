import React from 'react';
import MainInfromation from './MainInformation/Loadable';
import Skills from './Skills/Loadable';

export const EmployeeProfile = () => (
  <div className="container-fluid">
    <div className="panel panel-profile" id="sticky-parent">
      <div className="profile-left" id="profile-left-panel">
        <MainInfromation />
      </div>
      <div className="profile-right">
        <Skills />
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default EmployeeProfile;
