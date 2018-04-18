import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TestCreationForm from './index';
import AsyncLink from '../../../../AsyncLink';

export const isSpecListLoading = (state) => {
  let isLoading = true;
  if (state.get('specificationsSkillsTestCreation')) {
    const specificationsSkills = state.get('specificationsSkillsTestCreation').get('specificationList').get('specificationListStatus');
    if (specificationsSkills === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const TestCreationLink = (props) => {
  const placeholder = <TestCreationForm />;
  return (
    <AsyncLink loading={props.isSpecListLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

TestCreationLink.propTypes = {
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

export default connect(mapStateToProps, null)(TestCreationLink);
