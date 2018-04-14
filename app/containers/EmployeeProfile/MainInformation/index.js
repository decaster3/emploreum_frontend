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
import DetailProfile from './../../../components/Employee/EmployeeProfileComponents/MainInformation/Detail';
import MainProfile from './../../../components/Employee/EmployeeProfileComponents/MainInformation/Main';

export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(this.props.employeeId)
    this.props.getProfileMainInfo(this.props.employeeId);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>MainInformation</title>
          <meta name="description" content="Description of MainInformation" />
        </Helmet>
        {this.props.mainInfoStatus == "LOADED" ? 
        <div>        <MainProfile
        mainInfoStatus={this.props.mainInfoStatus}
        mainInfo={this.props.mainInfo}
      />
      <DetailProfile
        mainInfoStatus={this.props.mainInfoStatus}
        mainInfo={this.props.mainInfo}
      /></div>
      : <div />
      }
      </div>
    );
  }
}

MainInformation.propTypes = {
  getProfileMainInfo: PropTypes.func,
  mainInfoStatus: PropTypes.string,
  mainInfo: PropTypes.object,
  employeeId: PropTypes.string,
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

const withReducer = injectReducer({ key: 'employeeProfileMainInformation', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainInformation);
