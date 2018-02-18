/**
*
* Skill
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Skill = (props) => {
  const { name, raiting, imgUrl } = props;
  return (
    <div className="col-md-3 col-sm-6">
      <div className="award-item">
        <div className="hexagon">
          <img src={imgUrl} alt="Skill" />
        </div>
        <span>{name}</span>
        <span className="badge badge-bg">{raiting}</span>
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  raiting: PropTypes.number,
  imgUrl: PropTypes.string,
};

export default Skill;
