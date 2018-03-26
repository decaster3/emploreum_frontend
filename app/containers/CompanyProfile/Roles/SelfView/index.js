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
import About from '../../About/Loadable';
import CompanyOpenVacancies from '../../OpenVacancies/Loadable';

import { selectMyId } from './selectors';

export class SelfView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid">
        <div className="panel panel-profile" id="sticky-parent">
          <div className="profile-left" id="profile-left-panel">
            <MainInfromation companyProfileId={this.props.companyProfileId} />
          </div>
          <div className="profile-right">
            <About companyProfileId={this.props.companyProfileId} />
            <CompanyOpenVacancies companyProfileId={this.props.companyProfileId} />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

SelfView.propTypes = {
  companyProfileId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    companyProfileId: selectMyId(state),
  };
}

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect,
)(SelfView);
