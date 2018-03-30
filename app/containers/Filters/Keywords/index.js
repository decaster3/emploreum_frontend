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

import Keyword from '../../../components/Filters/Tags/Tag';
import KeywordsWrapper from '../../../components/Filters/Tags/TagsWrapper';
import KeywordInput from '../../../components/Filters/KeywordFilter/AddKeyword';
import KeywordsFilterWrapper from '../../../components/Filters/FilterWrapper';

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
        tag={keyword}
        reload={() => this.props.dispatch(this.props.reload())}
        deleteTag={this.props.deleteKeyword}
      />)
    );
  }

  render() {
    const keywords = this.renderKeywords();
    return (
      <KeywordsFilterWrapper classes={this.props.classes}>
        <KeywordInput reload={() => this.props.dispatch(this.props.reload())} addKeyword={this.props.addKeyword} />
        <KeywordsWrapper>
          { keywords }
        </KeywordsWrapper>
      </KeywordsFilterWrapper>
    );
  }
}

Keywords.propTypes = {
  dispatch: PropTypes.func,
  reload: PropTypes.func,
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
    dispatch,
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
