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

import { selectTestQuestionsStatus, selectTestQuestionsItems } from './selectors';
import reducer from './reducer';
import { getTestQuestionCount, changeCurrentQuestion } from './actions';


export class TestNavigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getTestQuestionCount(this.props.vacancyId);
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
        {
          this.props.testQuestionsStatus === 'LOADED'
          ? <VacancyTestQuestion currentQuestion={this.props.currentQuestion} vacancyId={this.props.vacancyId} />
          : <div />
        }
      </div>
    );
  }
}

TestNavigation.propTypes = {
  getTestQuestionCount: PropTypes.func.isRequired,
  changeCurrentQuestion: PropTypes.func.isRequired,
  testQuestionsItems: PropTypes.array.isRequired,
  testQuestionsStatus: PropTypes.string.isRequired,
  currentQuestion: PropTypes.number,
  vacancyId: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    testQuestionsItems: selectTestQuestionsItems(state),
    testQuestionsStatus: selectTestQuestionsStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTestQuestionCount: (evt) => dispatch(getTestQuestionCount(evt)),
    changeCurrentQuestion: (evt) => dispatch(changeCurrentQuestion(evt)),
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testNavigation', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestNavigation);
