/**
 *
 * VacanciesSearch
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { selectKeywords } from './selectors';
import reducer from './reducer';
import { clearReducer, addKeyword, deleteKeyword, getKeywordsFromUrl } from './actions';

import Keyword from '../../../components/Filters/KeywordFilter/Keywords/Keyword/Loadable';
import KeywordsWrapper from '../../../components/Filters/KeywordFilter/Keywords/KeywordsWrapper/Loadable';
import KeywordInput from '../../../components/Filters/KeywordFilter/AddKeyword/Loadable';
import KeywordsFilterWrapper from '../../../components/Filters/KeywordFilter/FilterWrapper/Loadable';

export class Keywords extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getKeywordsFromUrl();
  }
  componentWillUnmount() {
    this.props.clearReducer();
  }
  renderKeywords() {
    return this.props.selectedKeywords.map((keyword) =>
      (<Keyword
        key={keyword}
        keyword={keyword}
        deleteKeyword={this.props.deleteKeyword}
      />)
    );
  }

  render() {
    const keywords = this.renderKeywords();
    return (
      <KeywordsFilterWrapper classes={this.props.classes}>
        <KeywordInput addKeyword={this.props.addKeyword} />
        <KeywordsWrapper>
          { keywords }
        </KeywordsWrapper>
      </KeywordsFilterWrapper>
    );
  }
}

Keywords.propTypes = {
  clearReducer: PropTypes.func,
  getKeywordsFromUrl: PropTypes.func,
  deleteKeyword: PropTypes.func,
  addKeyword: PropTypes.func,
  selectedKeywords: PropTypes.array,
  classes: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    selectedKeywords: selectKeywords(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearReducer: () => dispatch(clearReducer()),
    getKeywordsFromUrl: () => dispatch(getKeywordsFromUrl()),
    addKeyword: (evt) => dispatch(addKeyword(evt)),
    deleteKeyword: (evt) => dispatch(deleteKeyword(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'keywordsFilter', reducer });

export default compose(
  withReducer,
  withConnect,
)(Keywords);
