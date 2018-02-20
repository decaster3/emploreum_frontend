import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import MainInfromation from '../../MainInformation/Loadable';
import Skills from '../../Skills/Loadable';
import EnrollVacancy from '../../../../components/Vacancy/EnrollVacancy/Loadable';

import { enrollVacancy, getEnrollButtonState } from './actions';
import { selectEnrollButtonState } from './selectors';
import {
  AVAILABLE,
  LOADING,
} from './constants';

export class EmployeeView extends React.Component {
  componentDidMount() {
    this.props.getEnrollButtonState(this.props.match.params.id);
  }
  renderEnrollButton() {
    switch (this.props.enrollButtonState) {
      case LOADING:
        return (
          <EnrollVacancy
            enrollVacancy={this.props.enrollVacancy}
            vacancyId={this.props.match.params.id}
            loading
          />);
      case AVAILABLE:
        return (
          <EnrollVacancy
            enrollVacancy={this.props.enrollVacancy}
            vacancyId={this.props.match.params.id}
          />);
      default:
        return <div />;
    }
  }
  render() {
    const enrollButton = this.renderEnrollButton();
    return (
      <div className="container-fluid">
        <div className="panel panel-profile" id="sticky-parent">
          <div className="profile-left" id="profile-left-panel">
            <MainInfromation
              vacancyId={this.props.match.params.id}
            />
            { enrollButton }
          </div>
          <div className="profile-right">
            <Skills
              vacancyId={this.props.match.params.id}
            />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

EmployeeView.propTypes = {
  match: PropTypes.object,
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

const withReducer = injectReducer({ key: 'employeeViewVacancy', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeView);
