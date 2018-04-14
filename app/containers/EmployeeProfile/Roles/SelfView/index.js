/**
 *
 * SelfView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MainInfromation from '../../MainInformation';
import Skills from '../../Skills';
// import Rating from '../../Rating/Loadable';
import { selectMyId } from './selectors';

export class SelfView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.hideActiveModal();
  }
  // close modal window after redirect
  hideActiveModal() {
    if (document.getElementsByClassName('modal-backdrop')[0]) {
      const fade = document.getElementsByClassName('modal-backdrop')[0];
      fade.className = '';
    }
    if (document.getElementsByClassName('modal-open')[0]) {
      const modal = document.getElementsByClassName('modal-open')[0];
      modal.className = modal.className.replace('modal-open', '');
    }
  }
  render() {
    console.log(this.props.employeeId);
    return (
      <div className="container-fluid">
        <div className="panel panel-profile" id="sticky-parent">
          <div className="profile-left" id="profile-left-panel">
            <MainInfromation employeeId={this.props.employeeId} />
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
