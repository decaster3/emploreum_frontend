/**
 *
 * TestNavigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';
import injectReducer from 'utils/injectReducer';

import TestNavigationItem from '../../../../components/Vacancy/Test/TestNavigatonItem/Loadable';
import TestNavigationWrapper from '../../../../components/Vacancy/Test/TestNavigationWrapper/Loadable';
import VacancyTestQuestion from '../TestQuestion/Loadable';

import { selectTestQuestionsStatus, selectTestQuestionsItems, selectTestCurrentQuestion } from './selectors';
import reducer from './reducer';
import { changeCurrentQuestion, getTestQuestionCount, clearReducer } from './actions';


export class TestNavigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.currentQuestion) {
      this.props.getTestQuestionCount(this.props.vacancyId, this.props.currentQuestion);
    } else {
      this.props.getTestQuestionCount(this.props.vacancyId);
    }
  }

  componentWillUnmount() {
    this.props.clearReducer();
  }

  renderNavigationItems() {
    if (this.props.testQuestionsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.testQuestionsItems.map((item) =>
      (<TestNavigationItem
        key={item.id}
        question={item}
        changeCurrentQuestion={this.props.changeCurrentQuestion}
        current={item.id === this.props.currentQuestion}
      />)
    );
  }

  render() {
    const navigationItems = this.renderNavigationItems();
    return (
      <div>
        <TestNavigationWrapper>
          { navigationItems }
        </TestNavigationWrapper>
        <VacancyTestQuestion testCurrentQuestion={this.props.testCurrentQuestion} vacancyId={this.props.vacancyId} />
      </div>
    );
  }
}

TestNavigation.propTypes = {
  getTestQuestionCount: PropTypes.func.isRequired,
  changeCurrentQuestion: PropTypes.func.isRequired,
  testQuestionsItems: PropTypes.array.isRequired,
  testQuestionsStatus: PropTypes.string.isRequired,
  currentQuestion: PropTypes.string,
  vacancyId: PropTypes.string,
  clearReducer: PropTypes.func,
  testCurrentQuestion: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    testQuestionsItems: selectTestQuestionsItems(state),
    testQuestionsStatus: selectTestQuestionsStatus(state),
    testCurrentQuestion: selectTestCurrentQuestion(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCurrentQuestion: (evt) => dispatch(changeCurrentQuestion(evt)),
    getTestQuestionCount: (evt, ev) => dispatch(getTestQuestionCount(evt, ev)),
    clearReducer: () => dispatch(clearReducer()),
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testNavigation', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestNavigation);
