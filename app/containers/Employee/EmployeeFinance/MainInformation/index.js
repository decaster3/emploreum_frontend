import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import {
  selectHeader,
  selectAddressStatus,
} from './selectors';
import { balanceChangeListener, getHeaderInfo } from './actions';

import EmployeeInfo from '../../../../components/FinanceHeader/EmployeeInfo/Loadable';
import FinanceHeader from '../../../../components/FinanceHeader/FinanceHeader/Loadable';

class EmployeeFinance extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.balanceChangeListener();
    this.props.getHeaderInfo();
  }

  render() {
    const { address, balance, income, endedContractsCount, currentContractsCount, status } = this.props.header;

    return (
      <FinanceHeader address={address} addressStatus={status}>
        <EmployeeInfo
          balance={balance}
          income={income}
          endedContractsCount={endedContractsCount}
          currentContractsCount={currentContractsCount}
        />
      </FinanceHeader>
    );
  }
}

EmployeeFinance.propTypes = {
  getHeaderInfo: PropTypes.func.isRequired,
  balanceChangeListener: PropTypes.func.isRequired,
  header: PropTypes.shape({
    address: PropTypes.string,
    status: PropTypes.string,
    balance: PropTypes.number,
    income: PropTypes.number,
    endedContractsCount: PropTypes.number,
    currentContractsCount: PropTypes.number,
  }),
};

function mapStateToProps(state) {
  return {
    header: selectHeader(state),
    addressStatus: selectAddressStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHeaderInfo: () => dispatch(getHeaderInfo()),
    balanceChangeListener: () => dispatch(balanceChangeListener()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeFinanceMainInformation', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeFinance);
