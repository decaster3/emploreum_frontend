/**
 *
 * MainInformation
 *      <FinanceHeader address={address} addressStatus={status} >
        <CompanyInfo balance={balance} spending={spending} employee={employee} canBePaid={canBePaid} />
      </FinanceHeader>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';

import {
  selectMainInformationItems,
  selectMainInformationStatus,
} from './selectors';
import reducer from './reducer';

import { getAllHeader } from './actions';
import CompanyInfo from '../../../../components/FinanceHeader/CompanyInfo';
import FinanceHeader from '../../../../components/FinanceHeader/FinanceHeader';


export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getAllHeader();
  }

  render() {
    return (
      <FinanceHeader address={this.props.mainInformation.address} mainInformationStatus={this.props.mainInformationStatus} >
        <CompanyInfo balance={this.props.mainInformation.balance} spending={this.props.mainInformation.spending} employee={this.props.mainInformation.employeeCount} canBePaid={this.props.mainInformation.canBePaid} />
      </FinanceHeader>
    );
  }
}

MainInformation.propTypes = {
  getAllHeader: PropTypes.func,
  mainInformationStatus: PropTypes.string,
  mainInformation: PropTypes.shape({
    address: PropTypes.string,
    status: PropTypes.string,
    balance: PropTypes.number,
    canBePaid: PropTypes.number,
    spending: PropTypes.number,
    employeeCount: PropTypes.number,
  }),
};

function mapStateToProps(state) {
  return {
    mainInformation: selectMainInformationItems(state),
    mainInformationStatus: selectMainInformationStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllHeader: () => dispatch(getAllHeader()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyFinanceMainInfo', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainInformation);
