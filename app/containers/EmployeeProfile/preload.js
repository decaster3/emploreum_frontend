import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MainInformation from './MainInformation';
import Skills from './Skills';
import AsyncLink from './../../AsyncLink';

export const isEmployeeProfileLoading = (state) => {
  let isLoading = true;
  if (state.get('employeeProfileMainInformation') &&
    state.get('employeeProfileSpecificationsSkills')) {
    const mainInfoStatus = state.get('employeeProfileMainInformation').get('mainInformation').get('status');
    const skillsStatus = state.get('employeeProfileSpecificationsSkills').get('specificationsSkills').get('status');
    if (mainInfoStatus === 'LOADED' &&
    skillsStatus === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

const selectRole = (state) => state.get('userSession').get('userAuth').get('userInformation').get('role');
const selectMainInformation = (state) =>
state.get('userSession').get('userAuth')
  ? state.get('userSession').get('userAuth').get('userInformation')
  : null;

const selectEmployeeId = createSelector(
  selectMainInformation,
  (id) => id.get('id') ? id.get('id') : null
);

export const EmployeeProfileLink = (props) => {
  let placeholder;
  if (props.role === 'EMPLOYEE') {
    placeholder = (<div><MainInformation employeeId={props.employeeId} onClose />
      <Skills employeeId={props.employeeId} onClose />
    </div>);
  } else if (props.role === 'COMPANY') {
    placeholder = (<div><MainInformation employeeId={props.id} onClose />
      <Skills employeeId={props.id} onClose />
    </div>);
  } else {
    placeholder = (<div><MainInformation employeeId={props.id} onClose />
      <Skills employeeId={props.id} onClose />
    </div>);
  }
  return (
    <AsyncLink loading={props.isEmployeeProfileLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

EmployeeProfileLink.propTypes = {
  id: PropTypes.string,
  employeeId: PropTypes.string,
  role: PropTypes.string,
  isEmployeeProfileLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isEmployeeProfileLoading: isEmployeeProfileLoading(state),
    role: selectRole(state),
    employeeId: selectEmployeeId(state),
  };
}

export default connect(mapStateToProps, null)(EmployeeProfileLink);
