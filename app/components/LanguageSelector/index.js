/**
*
* LanguageSelector
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { LOADED } from '../../containers/Registration/constants';
import AutoComplete from '../AutoComplete/Loadable';
import ChoosenLanguage from './ChoosenLanguage/Loadable';
import ChoosenLanguages from './ChoosenLanguages/Loadable';
import Wrapper from './LanguageWrapper/Loadable';

class LanguageSelector extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getLanguage();
  }
  renderChooseLanguage() {
    if (this.props.choosenLanguages.toJS().length < 0) {
      return (<div>Choose language please</div>);
    }
    return this.props.choosenLanguages.toJS().map((item) =>
    (<ChoosenLanguage
      key={item.name}
      language={item.name}
      deleteLanguage={this.props.deleteLanguageFromChoosen}
    />));
  }

  render() {
    const languages = this.renderChooseLanguage();
    switch (this.props.languageListStatus) {
      case LOADED:
        return (
          <Wrapper>
            <AutoComplete
              addItem={this.props.addLanguage}
              list={this.props.languageList}
              whatToAdd={'Language'}
            />
            <ChoosenLanguages>
              {languages}
            </ChoosenLanguages>
          </Wrapper>
        );
      default:
        return (
          <div>
            Loadingg
          </div>
        );
    }
  }
}

LanguageSelector.propTypes = {
  languageList: PropTypes.object,
  getLanguage: PropTypes.func,
  deleteLanguageFromChoosen: PropTypes.func,
  addLanguage: PropTypes.func,
  languageListStatus: PropTypes.string,
  choosenLanguages: PropTypes.object,
};

export default LanguageSelector;
