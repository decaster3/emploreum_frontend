/**
 *
 * TestStart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { selectStartingTest, selectVacancyId } from './selectors';
import reducer from './reducer';
import { startTest } from './actions';
import StartTestComponent from '../../../components/Vacancy/Test/StartTest/Loadable';

export class TestStart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StartTestComponent
        startingTest={this.props.startingTest}
        vacancyId={this.props.vacancyId}
        startTest={this.props.startTest}
      />
    );
  }
}

TestStart.propTypes = {
  startingTest: PropTypes.bool,
  vacancyId: PropTypes.string,
  startTest: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    startingTest: selectStartingTest(state),
    vacancyId: selectVacancyId(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTest: (evt) => dispatch(startTest(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testStart', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestStart);
