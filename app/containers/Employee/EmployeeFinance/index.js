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
        key={contract.startDay}
        address={contract.address}
        company={contract.company}
        salary={contract.salary}
        startDay={contract.startDay}
        endDay={contract.endDay}
      />)
    );
  }

  renderCurrentContracts() {
    if (this.props.currentContractsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.currentContractsItems.map((contract) =>
      (<TableRow
        key={contract.startDay}
        address={contract.address}
        company={contract.company}
        salary={contract.salary}
        startDay={contract.startDay}
        endDay={contract.endDay}
      />)
    );
  }

  render() {
    const balance = 2;
    const income = 0.5;
    const currentContractsRows = this.renderCurrentContracts();
    const endedContractsRow = this.renderEndedContracts();
    return (
      <div>
        <Helmet>
          <title>Employee Profile</title>
          <meta name="description" content="Profile of Employee" />
        </Helmet>
        <EmployeeFinanceComponent
          address={this.props.addressName}
          addressStatus={this.props.addressStatus}
          balance={balance}
          income={income}
          currentContracts={currentContractsRows}
          endedContracts={endedContractsRow}
        />
      </div>
    );
  }
}

EmployeeFinance.propTypes = {
  getAllFinance: PropTypes.func.isRequired,
  currentContractsItems: PropTypes.array,
  endedContractsItems: PropTypes.array,
  endedContractsStatus: PropTypes.string,
  currentContractsStatus: PropTypes.string,
  addressStatus: PropTypes.string,
  addressName: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    currentContractsItems: selectCurrentContractsItems(state),
    endedContractsItems: selectEndedContractsItems(state),
    endedContractsStatus: selectEndedContractsStatus(state),
    currentContractsStatus: selectCurrentContractsStatus(state),
    addressName: selectAddressName(state),
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
