/**
 *
 * StartPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { changeRole } from '../Registration/actions';
import reducer from '../Registration/reducer';
import StartPageComponent from '../../components/StartPageComponent/Loadable';

export class StartPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>StartPage</title>
          <meta name="description" content="Description of StartPage" />
        </Helmet>
        <StartPageComponent
          changeRole={this.props.changeRole}
        />
      </div>
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
