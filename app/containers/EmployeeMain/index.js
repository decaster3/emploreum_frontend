/**
 *
 * EmployeeMain
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import makeSelectEmployeeMain from './selectors';
import reducer from './reducer';
import EmployeeProfile from '../../components/EmployeeProfile';
import { EmployeeWrapper } from '../../components/Wrapper';

export class EmployeeMain extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const address = '0x05b89ad8ef43fcf3d3f6b2e5fdac4cd4719bafa0';
    const balance = 2;
    const income = 0.5;

    return (
      <EmployeeWrapper finance={true}>
        <EmployeeProfile address={address} balance={balance} income={income} />
      </EmployeeWrapper>
    );
  }
}

EmployeeMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  employeemain: makeSelectEmployeeMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeMain', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeMain);
