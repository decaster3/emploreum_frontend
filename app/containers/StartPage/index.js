/**
 *
 * StartPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import selectRole from './selectors';
import reducer from './reducer';
import { changeRole } from './actions';

import {
  EMPLOYEE,
  COMPANY,
} from './constants';

export class StartPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>StartPage</title>
          <meta name="description" content="Description of StartPage" />
        </Helmet>
        <button onClick={() => this.props.handleChangeRole(COMPANY)}>Company</button>
        <button onClick={() => this.props.handleChangeRole(EMPLOYEE)}>Employee</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    role: selectRole(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeRole: (evt) => dispatch(changeRole(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'startPage', reducer });

StartPage.propTypes = {
  handleChangeRole: PropTypes.func,
};

export default compose(
  withReducer,
  withConnect,
)(StartPage);
