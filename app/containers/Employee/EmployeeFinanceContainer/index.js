import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
// import makeSelectEmployeeMain from './selectors';
import reducer from './reducer';

import EmployeeFinance from '../../../components/Employee/EmployeeFinanceComponents/EmployeeFinance/Loadable';
import TableRow from '../../../components/Employee/EmployeeFinanceComponents/TableRow/Loadable';

class EmployeeFinanceContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderContracts(contracts) {
    return contracts.map((contract) =>
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
    const mockContracts = [{
      address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
      company: 'ООО Компания 1',
      salary: 2,
      startDay: 'Oct 1, 2016',
      endDay: 'Oct 21, 2016',
    }];
    const address = '0x05b89ad8ef43fcf3d3f6b2e5fdac4cd4719bafa0';
    const balance = 2;
    const income = 0.5;
    const currentContracts = mockContracts;
    const endedContracts = mockContracts;

    const currentContractsRows = this.renderContracts(currentContracts);
    const endedContractsRow = this.renderContracts(endedContracts);
    console.log(EmployeeFinance);
    
    return (
      <div>
        <Helmet>
          <title>Employee Profile</title>
          <meta name="description" content="Profile of Employee" />
        </Helmet>
        <EmployeeFinance
          address={address}
          balance={balance}
          income={income}
          currentContracts={currentContractsRows}
          endedContracts={endedContractsRow}
        />
      </div>
    );
  }
}

EmployeeFinanceContainer.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'finance', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeFinanceContainer);
