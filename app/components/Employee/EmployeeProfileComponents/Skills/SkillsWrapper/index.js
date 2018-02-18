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
      <h4 className="heading">Навыки</h4>
      <div className="awards">
        <div className="row">
          { children }
        </div>
        <div className="text-center padding-top-30">
          <a href="" className="btn btn-default">Просмотреть все</a>
          <a href="" className="btn btn-success" data-toggle="modal" data-target="#modal">Изменить</a>
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
