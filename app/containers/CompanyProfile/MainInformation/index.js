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
} from './selectors';

import { getProfileMainInfo } from './actions';

import reducer from './reducer';
import DetailProfile from '../../../components/Company/CompanyProfile/MainInformation/Detail';
import MainProfile from '../../../components/Company/CompanyProfile/MainInformation/Main';
import SocialProfile from '../../../components/Company/CompanyProfile/MainInformation/Social';

export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getProfileMainInfo(this.props.companyProfileId);
  }
  renderMainInfo() {
    if (this.props.mainInfoStatus === 'LOADED') {
      return (
        <MainProfile
          mainInfoStatus={this.props.mainInfoStatus}
          mainInfo={this.props.mainInfo}
        />);
    }
    return <div />;
  }
  renderDetailInfo() {
    if (this.props.mainInfoStatus === 'LOADED') {
      return (
        <DetailProfile
          mainInfoStatus={this.props.mainInfoStatus}
          mainInfo={this.props.mainInfo}
        />);
    }
    return <div />;
  }
  render() {
    const mainInfo = this.renderMainInfo();
    const detailInfo = this.renderDetailInfo();
    return (
      <div>
        <Helmet>
          <title>MainInformation</title>
          <meta name="description" content="Description of MainInformation" />
        </Helmet>
        { mainInfo }
        { detailInfo }
        <SocialProfile />
      </div>
    );
  }
}

MainInformation.propTypes = {
  getProfileMainInfo: PropTypes.func,
  mainInfoStatus: PropTypes.string,
  mainInfo: PropTypes.object,
  companyProfileId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    mainInfoStatus: selectMainInformationStatus(state),
    mainInfo: selectMainInfo(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfileMainInfo: (evt) => dispatch(getProfileMainInfo(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyProfileMainInformation', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainInformation);
