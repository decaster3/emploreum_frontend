/**
 *
 * Tests
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';
import injectReducer from 'utils/injectReducer';
import { selectTestsStatus, selectTestsItems } from './selectors';
import reducer from './reducer';
import { getTests } from './actions';
import TestCard from '../../../../components/Company/Tests/TestCard/Loadable';
import TestMain from '../../../../components/Company/Tests/TestMain/Loadable';

export class Tests extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getTests();
  }
  renderTestCards() {
    if (this.props.testStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.testItems.map((testCard) =>
      (<TestCard
        key={testCard.id}
        name={testCard.name}
        id={testCard.id}
        questionsCount={5}
      />)
    );
  }

  render() {
    const testCards = this.renderTestCards();
    return (
      <TestMain
        testCards={testCards}
      />
    );
  }
}

Tests.propTypes = {
  getTests: PropTypes.func.isRequired,
  testItems: PropTypes.array,
  testStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    testItems: selectTestsItems(state),
    testStatus: selectTestsStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTests: () => dispatch(getTests()),
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyTests', reducer });

export default compose(
  withReducer,
  withConnect,
)(Tests);
