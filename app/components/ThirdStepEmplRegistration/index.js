/**
*
* ThirdStepEmplRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LOADING } from '../../containers/RegistrationEmployee/constants';

class ThirdStepEmplRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getSpecification();
  }
  render() {
    switch (this.props.specificationListStatus) {
      case LOADING:
        return (
          <div>
            Loading
          </div>
        );
      default:
        return (
          <div>
            <button onClick={() => { this.props.chooseSpecification('qwe'); }}>
              Choose spec
            </button>
            <button onClick={() => { this.props.addSkill('qwe', 'ewq'); }}>
              Choose skill
            </button>
            <button onClick={() => { this.props.chooseSpecification('qweeee'); }}>
              Choose specc
            </button>
            <button onClick={() => { this.props.addSkill('qweeee', 'ewqqqq'); }}>
              Choose skilll
            </button>
            <button onClick={() => { this.props.addSkill('qweeee', 'huyi'); }}>
              Choose skillllll
            </button>
          </div>
        );
    }
  }
}

ThirdStepEmplRegistration.propTypes = {
  getSpecification: PropTypes.func,
  chooseSpecification: PropTypes.func,
  addSkill: PropTypes.func,
  specificationListStatus: PropTypes.string,
};

export default ThirdStepEmplRegistration;
