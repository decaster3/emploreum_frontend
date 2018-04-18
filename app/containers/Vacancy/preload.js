import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncLink from './../../AsyncLink';
import MainInfoVacancy from './MainInformation';
import SkillsVacancy from './Skills';
import EnrollVacancyButtonState from './EmployeeEnrollState';

const isVacancyLoading = (state) => {
  let isLoading = true;
  if (state.get('vacancyMainInformation') &&
    state.get('skillsVacancySearch')) {
    const mainInfoStatus = state.get('vacancyMainInformation').get('mainInformation').get('status');
    const skillsStatus = state.get('skillsVacancySearch').get('specificationsSkills').get('status');
    if (mainInfoStatus === 'LOADED' &&
      skillsStatus === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};
const selectRole = (state) => state.get('userSession').get('userAuth').get('userInformation').get('role');

export const EmployeeViewLinkVacancy = (props) => {
  let placeholder;
  if (props.role === 'EMPLOYEE') {
    placeholder = (<div><MainInfoVacancy vacancyId={props.id} onClose />
      <SkillsVacancy vacancyId={props.id} onClose />
      <EnrollVacancyButtonState vacancyId={props.id} onClose />
    </div>);
  } else if (props.role === 'COMPANY') {
    placeholder = (<div><MainInfoVacancy vacancyId={props.id} onClose />
      <SkillsVacancy vacancyId={props.id} onClose /></div>);
  } else {
    placeholder = (<div><MainInfoVacancy vacancyId={props.id} onClose />
      <SkillsVacancy vacancyId={props.id} onClose /></div>);
  }
  return (
    <AsyncLink loading={props.isVacancyLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

EmployeeViewLinkVacancy.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string,
  isVacancyLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isVacancyLoading: isVacancyLoading(state),
    role: selectRole(state),
  };
}

export default connect(mapStateToProps, null)(EmployeeViewLinkVacancy);
