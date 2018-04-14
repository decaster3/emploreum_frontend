/**
*
* Message
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.clearMessage = this.clearMessage.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.props.getEmployees(event.target.value);
    this.setState({
      [name]: event.target.value,
    });
  }
  // clearMessage() {
  //   this.setState({
  //     message: '',
  //   });
  // }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="col-xs-8 no-padding">
            <input
              className="form-control"
              onChange={this.handleChange}
              name="filter"
              value={this.state.filter}
              placeholder="Enter name"
            />
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  getEmployees: PropTypes.func,
};

export default Filter;
