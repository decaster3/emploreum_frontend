/**
 *
 * MainInformation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectMainInformationStatus,
  selectMainInfo,
  selectUserRole,
} from './selectors';

import { getVacancyMainInfo, onCloseMainInfo } from './actions';

import reducer from './reducer';
import DetailVacancy from '../../../components/Vacancy/CompanyInfo/Detail/Loadable';
import MainCompany from '../../../components/Vacancy/CompanyInfo/Main/Loadable';

export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getVacancyMainInfo(this.props.vacancyId);
  }
  componentWillUnmount() {
    if (!this.props.onClose) {
      this.props.onCloseMainInfo();
    }
  }
  renderMainInfo() {
    if (this.props.mainInfoStatus === 'LOADED') {
      return (
        <MainCompany
          mainInfo={this.props.mainInfo}
          role={this.props.role}
        />);
    }
    return <div />;
  }
  renderDetailInfo() {
    if (this.props.mainInfoStatus === 'LOADED') {
      return (
        <DetailVacancy
          mainInfo={this.props.mainInfo}
          vacancyId={this.props.vacancyId}
          role={this.props.role}
        />);
    }
    return <div />;
  }
  render() {
    const mainInfo = this.renderMainInfo();
    const detailInfo = this.renderDetailInfo();
    return (
      <div>
        { mainInfo }
        { detailInfo }
      </div>
    );
  }
}

MainInformation.propTypes = {
  getVacancyMainInfo: PropTypes.func,
  onCloseMainInfo: PropTypes.func,
  mainInfoStatus: PropTypes.string,
  mainInfo: PropTypes.object,
  vacancyId: PropTypes.string,
  role: PropTypes.string,
  onClose: PropTypes.bool,
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
    onCloseMainInfo: () => dispatch(onCloseMainInfo()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'vacancyMainInformation', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainInformation);
