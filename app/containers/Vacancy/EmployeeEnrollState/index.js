/**
 *
 * EmployeeEnrollState
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { enrollVacancy, getEnrollButtonState } from './actions';
import { selectEnrollButtonState } from './selectors';
import Available from './../../../components/Vacancy/EnrollVacancyEmployeeState/Available/Loadable';
import Submitted from './../../../components/Vacancy/EnrollVacancyEmployeeState/Submitted/Loadable';
import Failed from './../../../components/Vacancy/EnrollVacancyEmployeeState/Failed/Loadable';
import Continue from './../../../components/Vacancy/EnrollVacancyEmployeeState/Continue/Loadable';
import Start from './../../../components/Vacancy/EnrollVacancyEmployeeState/Start/Loadable';
import {
  AVAILABLE,
  SUBMITTED,
  LOADING,
  TEST_FAILED,
  CONTINUE_TEST,
  START_TEST,
} from './constants';


export class EmployeeEnrollState extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEnrollButtonState(this.props.vacancyId);
  }
  renderEnrollState() {
    switch (this.props.enrollButtonState) {
      case LOADING:
        return (
          <Available
            enrollVacancy={this.props.enrollVacancy}
            vacancyId={this.props.vacancyId}
            loading
          />);
      case SUBMITTED:
        return (
          <Submitted />);
      case AVAILABLE:
        return (
          <Available
            enrollVacancy={this.props.enrollVacancy}
            vacancyId={this.props.vacancyId}
          />);
      case TEST_FAILED:
        return (
          <Failed />);
      case CONTINUE_TEST:
        return (
          <Continue
            vacancyId={this.props.vacancyId}
          />);
      case START_TEST:
        return (
          <Start
            vacancyId={this.props.vacancyId}
          />);
      default:
        return <div />;
    }
  }
  render() {
    const enrollState = this.renderEnrollState();
    return (
      <div>
        { enrollState }
      </div>
    );
  }
}

EmployeeEnrollState.propTypes = {
  vacancyId: PropTypes.string,
  enrollVacancy: PropTypes.func,
  getEnrollButtonState: PropTypes.func,
  enrollButtonState: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    enrollButtonState: selectEnrollButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enrollVacancy: (evt) => dispatch(enrollVacancy(evt)),
    getEnrollButtonState: (evt) => dispatch(getEnrollButtonState(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeEnrollVacancyState', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeEnrollState);
