import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VacanciesSearch from './index';
import AsyncLink from './../../AsyncLink';

export const isVacanciesSearchLoading = (state) => {
  let isLoading = true;
  if (state.get('vacanciesSearch')) {
    const vacancies = state.get('vacanciesSearch').get('vacancies').get('status');
    if (vacancies === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const VacanciesSearchLink = (props) => {
  const placeholder = <VacanciesSearch />;
  return (
    <AsyncLink loading={props.isVacanciesSearchLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

VacanciesSearchLink.propTypes = {
  isVacanciesSearchLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isVacanciesSearchLoading: isVacanciesSearchLoading(state),
  };
}

export default connect(mapStateToProps, null)(VacanciesSearchLink);
