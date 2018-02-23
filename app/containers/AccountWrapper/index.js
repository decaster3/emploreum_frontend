/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import AccountWrapper from '../../components/AccountWrapper/Loadable';
import Header from '../Header/Loadable';
import MenuItem from '../../components/AccountWrapper/NavigationBar/MenuItem/Loadable';
import {
  selectView,
} from './selectors';
import {
  changeView,
} from './actions';


import reducer from './reducer';


function renderMenu(menu, view, onClick) {
  return menu.map((item) =>
    <MenuItem name={item.name} url={item.url} view={view} icon={item.icon} changeView={onClick} key={item.name} />
  );
}

export class AccountWrapperContainer extends React.PureComponent {
// TODO component DID mount check path
  render() {
    const { menu, view, changeView } = this.props;
    return (
      <div id="wrapper">
        <Header />
        <AccountWrapper menu={renderMenu(menu, view, changeView)}>
          {this.props.children}
        </AccountWrapper>
      </div>
    );
  }
}

AccountWrapperContainer.propTypes = {
  view: PropTypes.string,
  changeView: PropTypes.func,
  menu: PropTypes.array,
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
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'accountWrapper', reducer });

export default compose(
  withReducer,
  withConnect,
)(AccountWrapperContainer);
