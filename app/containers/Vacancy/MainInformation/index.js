/**
 *
 * MainInformation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectMainInformationStatus,
  selectMainInfo,
  selectUserRole,
} from './selectors';

import { getVacancyMainInfo } from './actions';
import { enrollVacancy } from '../actions';

import reducer from './reducer';
import DetailVacancy from '../../../components/Vacancy/CompanyInfo/Detail/Loadable';
import MainCompany from '../../../components/Vacancy/CompanyInfo/Main/Loadable';

export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(this.props.vacancyId);
    this.props.getVacancyMainInfo(this.props.vacancyId);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>MainInformation</title>
          <meta name="description" content="Description of MainInformation" />
        </Helmet>
        <MainCompany
          mainInfoStatus={this.props.mainInfoStatus}
          mainInfo={this.props.mainInfo}
        />
        <DetailVacancy
          mainInfo={this.props.mainInfo}
          enrollVacancy={this.props.enrollVacancy}
          vacancyId={this.props.vacancyId}
          role={this.props.role}
        />
      </div>
    );
  }
}

MainInformation.propTypes = {
  getVacancyMainInfo: PropTypes.func,
  enrollVacancy: PropTypes.func,
  mainInfoStatus: PropTypes.string,
  mainInfo: PropTypes.object,
  vacancyId: PropTypes.string,
  role: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    mainInfoStatus: selectMainInformationStatus(state),
    mainInfo: selectMainInfo(state),
    role: selectUserRole(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVacancyMainInfo: (evt) => dispatch(getVacancyMainInfo(evt)),
    enrollVacancy: (evt) => dispatch(enrollVacancy(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'vacancyMainInformation', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainInformation);
