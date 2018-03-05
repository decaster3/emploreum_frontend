/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import HeaderComponent from '../../components/Header/Loadable';
import { serverLogout } from '../../containers/UserSession/actions';
import { selectUserInitials } from './selectors';
import Notifications from './Notification/Loadable';
import BlockchainStatus from './BlockchainStatus/Loadable';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderNotifications() {
    return <Notifications />;
  }
  renderBlockchainStatus() {
    return <BlockchainStatus />;
  }

  render() {
    const notifications = this.renderNotifications();
    const blockchainStatus = this.renderBlockchainStatus();
    return (
      <div>
        <Helmet>
          <title>Header</title>
          <meta name="description" content="Description of Header" />
        </Helmet>
        <HeaderComponent
          serverLogout={this.props.serverLogout}
          userInitials={this.props.userInitials}
        >
          {notifications}
          {blockchainStatus}
        </HeaderComponent>
      </div>
    );
  }
}

Header.propTypes = {
  serverLogout: PropTypes.func,
  userInitials: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    userInitials: selectUserInitials(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    serverLogout: () => dispatch(serverLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
