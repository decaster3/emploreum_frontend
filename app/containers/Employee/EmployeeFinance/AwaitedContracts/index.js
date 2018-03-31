import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import {
  selectAwaitedContractsStatus,
  selectAwaitedContractsItems,
  selectIsThereAwaitedContracts,
} from './selectors';
import { contractConfirmationListener, getAwaitedContracts } from './actions';

import TableCreator from '../../../../components/Employee/EmployeeFinanceComponents/TableCreator';
import TableRow from '../../../../components/Employee/EmployeeFinanceComponents/TableRow';
import NoContracts from '../../../../components/Employee/EmployeeFinanceComponents/NoContracts';

class EmployeeFinance extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getAwaitedContracts();
    this.props.contractConfirmationListener();
  }
  renderAwaitedContracts() {
    if (this.props.awaitedContractsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    // TODO
    return this.props.awaitedContractsItems.map((contract) =>
      (<TableRow
        key={contract.duration}
        rows={[contract.duration,
          contract.company.name,
          contract.weekPayment,
        ]}
      />)
    );
  }

  render() {
    const awaitedContracts = this.renderAwaitedContracts();
    const tableVariantTwo = ['Duration', 'Company', 'Week Payment'];
    if (!this.props.isThereAwaitedContracts && this.props.awaitedContractsStatus === 'LOADED') {
      return <NoContracts contractType={'awaited'} />;
    }
    return (
      <TableCreator
        tableName="Awaited contracts"
        columns={tableVariantTwo}
      >
        {awaitedContracts}
      </TableCreator>
    );
  }
}

EmployeeFinance.propTypes = {
  awaitedContractsItems: PropTypes.array,
  awaitedContractsStatus: PropTypes.string,
  contractConfirmationListener: PropTypes.func,
  getAwaitedContracts: PropTypes.func,
  isThereAwaitedContracts: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    awaitedContractsItems: selectAwaitedContractsItems(state),
    awaitedContractsStatus: selectAwaitedContractsStatus(state),
    isThereAwaitedContracts: selectIsThereAwaitedContracts(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAwaitedContracts: () => dispatch(getAwaitedContracts()),
    contractConfirmationListener: () => dispatch(contractConfirmationListener()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeFinanceAwaitedContracts', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeFinance);
