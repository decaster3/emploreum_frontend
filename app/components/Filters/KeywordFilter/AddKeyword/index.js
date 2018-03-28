/**
*
* KeywordInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class KeywordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  }
  clearInput() {
    this.setState({
      keyword: '',
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-8 no-padding">
          <input
            className="form-control"
            onChange={this.handleChange}
            name="keyword"
            value={this.state.keyword}
            placeholder="Enter keyword"
          />
        </div>
        <div className="col-xs-4 no-padding">
          <button
            className="btn btn-primary col-xs-12"
            onClick={() => {
              this.props.addKeyword(this.state.keyword);
              this.clearInput();
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

KeywordInput.propTypes = {
  addKeyword: PropTypes.func,
};

export default KeywordInput;
