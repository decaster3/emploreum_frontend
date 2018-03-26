/**
 *
 * StartPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { changeRole } from '../Registration/actions';
import reducer from '../Registration/reducer';
import NavigationBar from '../../components/StartPageComponent/NavigationBar/Loadable';
import ChooseRole from '../../components/StartPageComponent/ChooseRole/Loadable';
import Find from '../../components/StartPageComponent/Find/Loadable';
import Features from '../../components/StartPageComponent/Features/Loadable';
import Footer from '../../components/StartPageComponent/Footer/Loadable';
import StartPageWrapper from '../../components/StartPageComponent/StartPageWrapper/Loadable';

export class StartPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StartPageWrapper>
        <NavigationBar />
        <ChooseRole />
        <Features />
        <Find />
        <Footer />
      </StartPageWrapper>
    );
  }
}

StartPage.propTypes = {
  changeRole: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRole: (evt) => dispatch(changeRole(evt)),
  };
}

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'registration', reducer });
export default compose(
  withReducer,
  withConnect,
)(StartPage);
