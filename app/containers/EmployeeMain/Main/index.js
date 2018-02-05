import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import EmployeeFinanceContainer from '../EmployeeFinanceContainer';
import Test from '../Test';
import { EmployeeWrapper } from '../../../components/Wrapper';
import {
  selectView,
} from './selectors';
import {
  changeView
} from './actions';
import { Switch, Route } from 'react-router-dom';

export class EmployeeMain extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <EmployeeWrapper changeView={this.props.changeView} view={this.props.view} >
        <Switch>
          <Route exact path='/employee' component={Test}/>
          <Route path='/employee/finance' component={EmployeeFinanceContainer}/>
        </Switch>
      </EmployeeWrapper>
    );
  }
}

EmployeeMain.propTypes = {
  view: PropTypes.string,
  dispatch: PropTypes.func,
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
const withReducer = injectReducer({ key: 'employeemain', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeMain);
