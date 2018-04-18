import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CompanyTests from './index';
import AsyncLink from '../../../../AsyncLink';

export const isCompanyTestsLoading = (state) => {
  let isLoading = true;
  if (state.get('companyTests')) {
    const vacancies = state.get('companyTests').get('tests').get('status');
    if (vacancies === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const CompanyTestsLink = (props) => {
  const placeholder = <CompanyTests />;
  return (
    <AsyncLink loading={props.isCompanyTestsLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

CompanyTestsLink.propTypes = {
  isCompanyTestsLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isCompanyTestsLoading: isCompanyTestsLoading(state),
  };
}

export default connect(mapStateToProps, null)(CompanyTestsLink);
