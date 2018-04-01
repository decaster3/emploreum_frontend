/**
*
* SkillsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const SkillsWrapper = (props) => {
  const { children } = props;
  return (
    <div>
      <h4 className="heading">Skills</h4>
      <div className="awards">
        <div className="row">
          { children }
        </div>
      </div>
    </div>
  );
};

SkillsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SkillsWrapper;
