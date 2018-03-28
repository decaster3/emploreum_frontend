/**
*
* SkillsInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ReactAutocomplete from 'react-autocomplete';

class SkillsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: '',
    };
    this.clearInput = this.clearInput.bind(this);
  }
  clearInput() {
    this.setState({
      skill: '',
    });
  }
  render() {
    return (
      <div>
        <ReactAutocomplete
          wrapperStyle={{}}
          items={this.props.skills || []}
          shouldItemRender={(item, skill) => item.name.toLowerCase().indexOf(skill.toLowerCase()) > -1}
          getItemValue={(item) => item.name}
          renderItem={(item) => (
            <div key={item.name}>
              {item.name}
            </div>
          )}
          value={this.state.language}
          onChange={(e) => this.setState({ language: e.target.value })}
          onSelect={(value) => {
            this.props.skills.forEach((el) => {
              if (el.name === value) {
                this.props.addSkill(el);
                this.clearInput();
              }
            });
          }}
        />
      </div>
    );
  }
}

SkillsInput.propTypes = {
  addSkill: PropTypes.func,
  skills: PropTypes.array,
};

export default SkillsInput;
