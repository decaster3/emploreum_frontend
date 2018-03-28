/**
*
* LanguageInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';

class LanguageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
    };
    this.clearInput = this.clearInput.bind(this);
  }
  clearInput() {
    this.setState({
      language: '',
    });
  }
  render() {
    return (
      <div>
        <ReactAutocomplete
          wrapperStyle={{}}
          items={this.props.languages || []}
          shouldItemRender={(item, language) => item.name.toLowerCase().indexOf(language.toLowerCase()) > -1}
          getItemValue={(item) => item.name}
          renderItem={(item) => (
            <div key={item.name}>
              {item.name}
            </div>
          )}
          value={this.state.language}
          onChange={(e) => this.setState({ language: e.target.value })}
          onSelect={(value) => {
            this.props.languages.forEach((el) => {
              if (el.name === value) {
                this.props.addLanguage(el);
                this.clearInput();
              }
            });
          }}
        />
      </div>
    );
  }
}

LanguageInput.propTypes = {
  addLanguage: PropTypes.func,
  languages: PropTypes.array,
};

export default LanguageInput;
