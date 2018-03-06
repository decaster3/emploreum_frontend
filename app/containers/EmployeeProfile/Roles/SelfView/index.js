/**
 *
 * SelfView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MainInfromation from '../../MainInformation/Loadable';
import Skills from '../../Skills/Loadable';
import Rating from '../../Rating/Loadable';
import { selectMyId } from './selectors';

export class SelfView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid">
        <div className="panel panel-profile" id="sticky-parent">
          <div className="profile-left" id="profile-left-panel">
            <MainInfromation employeeId={this.props.employeeId} />
          </div>
          <div className="profile-right">
            <Rating employeeId={this.props.employeeId} />
            <Skills employeeId={this.props.employeeId} />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

SelfView.propTypes = {
  employeeId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    employeeId: selectMyId(state),
  };
}

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect,
)(SelfView);
