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
  selectCompanyInfoStatus,
  selectCompanyInfo,
} from './selectors';

import { getAboutCompanyInfo } from './actions';

import reducer from './reducer';
import About from '../../../components/Company/CompanyProfile/About';

export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getAboutCompanyInfo(this.props.companyProfileId);
  }
  render() {
    return (
      <About
        companyInfoStatus={this.props.companyInfoStatus}
        about={this.props.companyInfo.about}
      />
    );
  }
}

MainInformation.propTypes = {
  getAboutCompanyInfo: PropTypes.func,
  companyInfoStatus: PropTypes.string,
  companyInfo: PropTypes.object,
  companyProfileId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    companyInfoStatus: selectCompanyInfoStatus(state),
    companyInfo: selectCompanyInfo(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAboutCompanyInfo: (evt) => dispatch(getAboutCompanyInfo(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyProfileAbout', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainInformation);
