import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import {
  selectCurrentContractsItems,
  selectEndedContractsItems,
  selectEndedContractsStatus,
  selectCurrentContractsStatus,
  selectAddressName,
  selectAddressStatus,
  selectAwaitedContractsStatus,
  selectAwaitedContractsItems,
} from './selectors';
import { getAllFinance } from './actions';

import EmployeeFinanceComponent from '../../../components/Employee/EmployeeFinanceComponents/EmployeeFinance/Loadable';
import TableRow from '../../../components/Employee/EmployeeFinanceComponents/TableRow/Loadable';

class EmployeeFinance extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getAllFinance();
  }
  renderEndedContracts() {
    if (this.props.endedContractsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.endedContractsItems.map((contract) =>
      (<TableRow
        key={contract.address}
        rows={[contract.address,
          contract.company,
          contract.salary,
          contract.startDay,
          contract.endDay,
        ]}
      />)
    );
  }

  renderAwaitedContracts() {
    if (this.props.awaitedContractsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.awaitedContractsItems.map((contract, index) =>
      (<TableRow
        key={`awaited ${index}`}
        rows={[contract.duration,
          contract.company,
          contract.salary,
        ]}
      />)
    );
  }

  renderCurrentContracts() {
    if (this.props.currentContractsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.currentContractsItems.map((contract) =>
      (<TableRow
        key={contract.address}
        rows={[contract.address,
          contract.company,
          contract.salary,
          contract.startDay,
          contract.endDay,
        ]}
      />)
    );
  }

  render() {
    const balance = 2;
    const income = 0.5;
    const currentContractsRows = this.renderCurrentContracts();
    const endedContractsRow = this.renderEndedContracts();
    const awaitedContracts = this.renderAwaitedContracts();
    return (
      <div>
        <Helmet>
          <title>Employee Profile</title>
          <meta name="description" content="Profile of Employee" />
        </Helmet>
        <EmployeeFinanceComponent
          address={this.props.address}
          addressStatus={this.props.addressStatus}
          balance={balance}
          income={income}
          currentContracts={currentContractsRows}
          endedContracts={endedContractsRow}
          awaitedContracts={awaitedContracts}
        />
      </div>
    );
  }
}

EmployeeFinance.propTypes = {
  getAllFinance: PropTypes.func.isRequired,
  currentContractsItems: PropTypes.array,
  endedContractsItems: PropTypes.array,
  awaitedContractsItems: PropTypes.array,
  endedContractsStatus: PropTypes.string,
  currentContractsStatus: PropTypes.string,
  awaitedContractsStatus: PropTypes.string,
  addressStatus: PropTypes.string,
  address: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    currentContractsItems: selectCurrentContractsItems(state),
    awaitedContractsItems: selectAwaitedContractsItems(state),
    endedContractsItems: selectEndedContractsItems(state),
    endedContractsStatus: selectEndedContractsStatus(state),
    awaitedContractsStatus: selectAwaitedContractsStatus(state),
    currentContractsStatus: selectCurrentContractsStatus(state),
    address: selectAddressName(state),
    addressStatus: selectAddressStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllFinance: () => dispatch(getAllFinance()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeFinance', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeFinance);
