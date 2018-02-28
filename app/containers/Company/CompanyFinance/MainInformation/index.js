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
  selectHeader,
} from './selectors';
import reducer from './reducer';

import { getAllHeader } from './actions';
import CompanyInfo from '../../../../components/FinanceHeader/CompanyInfo/Loadable';
import FinanceHeader from '../../../../components/FinanceHeader/FinanceHeader/Loadable';


export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getAllHeader();
  }

  render() {
    return (
      <FinanceHeader address={this.props.header.address} addressStatus={this.props.header.status} >
        <CompanyInfo balance={this.props.header.balance} spending={this.props.header.spending} employee={this.props.header.employeeCount} canBePaid={this.props.header.canBePaid} />
      </FinanceHeader>
    );
  }
}

MainInformation.propTypes = {
  getAllHeader: PropTypes.func,
  header: PropTypes.shape({
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
    header: selectHeader(state),
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
