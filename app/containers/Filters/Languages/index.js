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
import { selectChoosenLanguages, selectPossibleLanguages } from './selectors';
import reducer from './reducer';
import { clearReducer, addLanguage, deleteLanguage, getLanguages } from './actions';

import Language from '../../../components/Filters/LanguageFilter/Languages/Language/Loadable';
import LanguagesWrapper from '../../../components/Filters/LanguageFilter/Languages/LanguageWrapper/Loadable';
import LanguageInput from '../../../components/Filters/LanguageFilter/AddLanguage/Loadable';
import LanguagesFilterWrapper from '../../../components/Filters/LanguageFilter/FilterWrapper/Loadable';

export class Keywords extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getLanguages();
  }
  componentWillUnmount() {
    this.props.clearReducer();
  }
  renderLanguages() {
    return this.props.selectedLanguages.map((language) =>
      (<Language
        key={language.id}
        language={language}
        deleteLanguage={this.props.deleteLanguage}
      />)
    );
  }

  render() {
    const languages = this.renderLanguages();
    return (
      <LanguagesFilterWrapper classes={this.props.classes}>
        <LanguageInput addLanguage={this.props.addLanguage} languages={this.props.possibleLanguages} />
        <LanguagesWrapper>
          { languages }
        </LanguagesWrapper>
      </LanguagesFilterWrapper>
    );
  }
}

Keywords.propTypes = {
  getLanguages: PropTypes.func,
  clearReducer: PropTypes.func,
  deleteLanguage: PropTypes.func,
  addLanguage: PropTypes.func,
  selectedLanguages: PropTypes.array,
  possibleLanguages: PropTypes.array,
  classes: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    selectedLanguages: selectChoosenLanguages(state),
    possibleLanguages: selectPossibleLanguages(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearReducer: () => dispatch(clearReducer()),
    getLanguages: () => dispatch(getLanguages()),
    addLanguage: (evt) => dispatch(addLanguage(evt)),
    deleteLanguage: (evt) => dispatch(deleteLanguage(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'languagesFilter', reducer });

export default compose(
  withReducer,
  withConnect,
)(Keywords);
