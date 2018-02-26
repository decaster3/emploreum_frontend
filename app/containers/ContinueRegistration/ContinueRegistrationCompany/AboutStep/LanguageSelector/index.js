/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import reducer from '../../../../LanguageSelector/reducer';

import {
  selectLanguageList,
  selectLanguageListStatus,
  selectChoosenLanguages,
} from './selectors';

import LanguageSelector from '../../../../../components/LanguageSelector/Loadable';
import {
  getLanguage,
  addLanguage,
  deleteLanguageFromChoosen,
} from '../../../../LanguageSelector/actions';

export class LanguageStep extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LanguageSelector
          getLanguage={this.props.getLanguage}
          languageListStatus={this.props.languageListStatus}
          languageList={this.props.languageList}
          addLanguage={this.props.addLanguage}
          choosenLanguages={this.props.choosenLanguages}
          deleteLanguageFromChoosen={this.props.deleteLanguageFromChoosen}
          submitLanguageSkillsStep={this.props.submitLanguageSkillsStep}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    languageList: selectLanguageList(state),
    choosenLanguages: selectChoosenLanguages(state),
    languageListStatus: selectLanguageListStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLanguage: () => dispatch(getLanguage()),
    addLanguage: (evt) => dispatch(addLanguage(evt)),
    deleteLanguageFromChoosen: (evt) => dispatch(deleteLanguageFromChoosen(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer(
  { key: 'languageSelectorCompanyRegistration', reducer },
);


LanguageStep.propTypes = {
  getLanguage: PropTypes.func,
  languageListStatus: PropTypes.string,
  languageList: PropTypes.object,
  deleteLanguageFromChoosen: PropTypes.func,
  addLanguage: PropTypes.func,
  submitLanguageSkillsStep: PropTypes.func,
  choosenLanguages: PropTypes.object,
};

export default compose(
  withReducer,
  withConnect,
)(LanguageStep);
