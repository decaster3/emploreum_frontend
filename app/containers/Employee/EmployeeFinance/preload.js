import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EmployeeFinance from './index';
import AsyncLink from '../../../AsyncLink';

export const isEmployeeFinanceLoading = (state) => {
  let isLoading = true;
  if (state.get('employeeFinanceMainInformation') &&
    state.get('employeeFinanceEndedContracts') &&
    state.get('employeeFinanceCurrentContracts') &&
    state.get('employeeFinanceAwaitedContracts')) {
    const mainInfoStatus = state.get('employeeFinanceMainInformation').get('header').get('status');
    const endedContractsStatus = state.get('employeeFinanceEndedContracts').get('endedContracts').get('status');
    const currentContractsStatus = state.get('employeeFinanceCurrentContracts').get('currentContracts').get('status');
    const awaitedContractsStatus = state.get('employeeFinanceAwaitedContracts').get('awaitedContracts').get('status');
    if (mainInfoStatus === 'LOADED' &&
      endedContractsStatus === 'LOADED' &&
      currentContractsStatus === 'LOADED' &&
      awaitedContractsStatus === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const EmployeeFinanceLink = (props) => {
  const placeholder = <EmployeeFinance />;
  return (
    <AsyncLink loading={props.isEmployeeFinanceLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

EmployeeFinanceLink.propTypes = {
  isEmployeeFinanceLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isEmployeeFinanceLoading: isEmployeeFinanceLoading(state),
  };
}

export default connect(mapStateToProps, null)(EmployeeFinanceLink);
