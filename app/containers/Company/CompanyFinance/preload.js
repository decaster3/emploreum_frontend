import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CompanyFinance from './index';
import AsyncLink from '../../../AsyncLink';

export const isCompanyFinanceLoading = (state) => {
  let isLoading = true;
  if (state.get('companyFinanceMainInfo') &&
    state.get('companyFinanceRecentPayments') &&
    state.get('companyFinanceWorkingEmployees') &&
    state.get('companyFinanceOpenVacancies')) {
    const mainInfoStatus = state.get('companyFinanceMainInfo').get('header').get('status');
    const recentPayments = state.get('companyFinanceRecentPayments').get('recentPayments').get('status');
    const employees = state.get('companyFinanceWorkingEmployees').get('employees').get('status');
    const openVacancies = state.get('companyFinanceOpenVacancies').get('openVacancies').get('status');
    if (mainInfoStatus === 'LOADED' &&
      recentPayments === 'LOADED' &&
      employees === 'LOADED' &&
      openVacancies === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const CompanyFinanceLink = (props) => {
  const placeholder = <CompanyFinance />;
  return (
    <AsyncLink loading={props.isCompanyFinanceLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

CompanyFinanceLink.propTypes = {
  isCompanyFinanceLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isCompanyFinanceLoading: isCompanyFinanceLoading(state),
  };
}

export default connect(mapStateToProps, null)(CompanyFinanceLink);
