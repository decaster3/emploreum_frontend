import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import {
  selectCurrentContractsItems,
  selectCurrentContractsStatus,
  selectIsThereCurrentContracts,
} from './selectors';
import { getCurrentContracts } from './actions';

import TableCreator from '../../../../components/Employee/EmployeeFinanceComponents/TableCreator';
import TableRow from '../../../../components/Employee/EmployeeFinanceComponents/TableRow';
import NoContracts from '../../../../components/Employee/EmployeeFinanceComponents/NoContracts';

class EmployeeFinanceCurrentContracts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getCurrentContracts();
  }

  renderCurrentContracts() {
    if (this.props.currentContractsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.currentContractsItems.map((contract) =>
      (<TableRow
        key={contract.address}
        rows={[contract.contract,
          contract.company.name,
          contract.vacancy.weekPayment,
          contract.beginDate,
          contract.endDate,
        ]}
      />)
    );
  }

  render() {
    const currentContractsRows = this.renderCurrentContracts();
    const tableVariantOne = ['Contract address',
      'Company',
      'Salary',
      'Start date',
      'End date',
    ];
    if (!this.props.isThereCurrentContracts && this.props.currentContractsStatus === 'LOADED') {
      return <NoContracts contractType={'current'} />;
    }
    return (
      <TableCreator
        tableName="Current contracts"
        columns={tableVariantOne}
      >
        {currentContractsRows}
      </TableCreator>
    );
  }
}

EmployeeFinanceCurrentContracts.propTypes = {
  getCurrentContracts: PropTypes.func.isRequired,
  currentContractsItems: PropTypes.array,
  currentContractsStatus: PropTypes.string,
  isThereCurrentContracts: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    currentContractsItems: selectCurrentContractsItems(state),
    currentContractsStatus: selectCurrentContractsStatus(state),
    isThereCurrentContracts: selectIsThereCurrentContracts(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentContracts: () => dispatch(getCurrentContracts()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeFinanceCurrentContracts', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeFinanceCurrentContracts);
