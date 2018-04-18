import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EmployeesSearch from './index';
import AsyncLink from './../../AsyncLink';

export const isEmployeesSearchLoading = (state) => {
  let isLoading = true;
  if (state.get('employeesSearch')) {
    const vacancies = state.get('employeesSearch').get('status');
    if (vacancies === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const EmployeesSearchLink = (props) => {
  const placeholder = <EmployeesSearch />;
  return (
    <AsyncLink loading={props.isEmployeesSearchLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

EmployeesSearchLink.propTypes = {
  isEmployeesSearchLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isEmployeesSearchLoading: isEmployeesSearchLoading(state),
  };
}

export default connect(mapStateToProps, null)(EmployeesSearchLink);
