import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import AsyncLink from './../../AsyncLink';
import MainInfoVacancy from './MainInformation';
import About from './About';
import OpenVacancies from './OpenVacancies';
import Rating from './Rating';

const isCompanyProfileLoading = (state) => {
  let isLoading = true;
  if (state.get('companyProfileRating') &&
    state.get('companyProfileMainInformation') &&
    state.get('companyProfileAbout')) {
    const mainInfoStatus = state.get('companyProfileMainInformation').get('mainInformation').get('status');
    const ratingStatus = state.get('companyProfileRating').get('rating').get('status');
    const aboutStatus = state.get('companyProfileAbout').get('mainInformation').get('status');
    if (mainInfoStatus === 'LOADED' &&
    ratingStatus === 'LOADED' &&
    aboutStatus === 'LOADED') {
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

const selectCompanyId = createSelector(
  selectMainInformation,
  (id) => id.get('id') ? id.get('id') : null
);

export const CompanyProfileLink = (props) => {
  let placeholder;
  if (props.role === 'EMPLOYEE') {
    placeholder = (<div><About companyProfileId={props.id} onClose />
      <MainInfoVacancy companyProfileId={props.id} onClose />
      <OpenVacancies companyProfileId={props.id} onClose />
      <Rating companyProfileId={props.id} onClose />
    </div>);
  } else if (props.role === 'COMPANY') {
    placeholder = (<div><About companyProfileId={props.companyId} onClose />
      <MainInfoVacancy companyProfileId={props.companyId} onClose />
      <OpenVacancies companyProfileId={props.companyId} onClose />
      <Rating companyProfileId={props.companyId} onClose />
    </div>);
  } else {
    placeholder = (<div><About companyProfileId={props.id} onClose />
      <MainInfoVacancy companyProfileId={props.id} onClose />
      <OpenVacancies companyProfileId={props.id} onClose />
      <Rating companyProfileId={props.id} onClose />
    </div>);
  }
  return (
    <AsyncLink loading={props.isCompanyProfileLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

CompanyProfileLink.propTypes = {
  companyId: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string,
  isCompanyProfileLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isCompanyProfileLoading: isCompanyProfileLoading(state),
    role: selectRole(state),
    companyId: selectCompanyId(state),
  };
}

export default connect(mapStateToProps, null)(CompanyProfileLink);
