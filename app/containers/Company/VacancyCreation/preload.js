import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VacancyCreationForm from './index';
import AsyncLink from '../../../AsyncLink';

export const isSpecListLoading = (state) => {
  let isLoading = true;
  if (state.get('vacancyCreation')) {
    const specificationsSkills = state.get('vacancyCreation').get('specificationList').get('specificationListStatus');
    if (specificationsSkills === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const VacancyCreationLink = (props) => {
  const placeholder = <VacancyCreationForm />;
  return (
    <AsyncLink loading={props.isSpecListLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

VacancyCreationLink.propTypes = {
  isSpecListLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isSpecListLoading: isSpecListLoading(state),
  };
}

export default connect(mapStateToProps, null)(VacancyCreationLink);
