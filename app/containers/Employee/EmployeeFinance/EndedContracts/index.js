import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import {
  selectEndedContractsItems,
  selectEndedContractsStatus,
} from './selectors';
import { getEndedContracts } from './actions';

import TableCreator from '../../../../components/Employee/EmployeeFinanceComponents/TableCreator/Loadable';
import TableRow from '../../../../components/Employee/EmployeeFinanceComponents/TableRow/Loadable';

class EmployeeFinanceEndedContracts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEndedContracts();
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

  render() {
    const endedContractsRows = this.renderEndedContracts();
    const tableVariantOne = ['Contract address',
      'Company',
      'Salary',
      'Start date',
      'End date',
    ];
    return (
      <TableCreator
        tableName="Ended contracts"
        columns={tableVariantOne}
      >
        {endedContractsRows}
      </TableCreator>
    );
  }
}

EmployeeFinanceEndedContracts.propTypes = {
  getEndedContracts: PropTypes.func.isRequired,
  endedContractsItems: PropTypes.array,
  endedContractsStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    endedContractsItems: selectEndedContractsItems(state),
    endedContractsStatus: selectEndedContractsStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEndedContracts: () => dispatch(getEndedContracts()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeFinanceEndedContracts', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeFinanceEndedContracts);
