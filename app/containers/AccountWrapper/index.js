import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { AccountWrapper } from '../../components/AccountWrapper';
import {
  selectView,
} from './selectors';
import {
  changeView,
} from './actions';


import reducer from './reducer';

import { serverLogout } from '../UserSession/actions';

export class AccountWrapperContainer extends React.PureComponent {
// TODO component DID mount check path
  render() {
    return (
      <AccountWrapper
        changeView={this.props.changeView}
        view={this.props.view}
        url={this.props.url}
        serverLogout={this.props.serverLogout}
      >
        {this.props.children}
      </AccountWrapper>
    );
  }
}

AccountWrapperContainer.propTypes = {
  url: PropTypes.string,
  view: PropTypes.string,
  changeView: PropTypes.func,
  serverLogout: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};


const mapStateToProps = createStructuredSelector({
  view: selectView(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeView: (view) => dispatch(changeView(view)),
    serverLogout: () => dispatch(serverLogout()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'accountWrapper', reducer });

export default compose(
  withReducer,
  withConnect,
)(AccountWrapperContainer);
