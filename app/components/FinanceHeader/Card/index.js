import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
  const { number, title, icon } = props;

  return (
    <div className="col-md-3">
      <div className="metric">
        <span className="icon"><i className={`fa ${icon}`}></i></span>
        <p>
          <span className="number">{number}</span>
          <span className="title">{title}</span>
        </p>
      </div>
    </div>

  );
};

Card.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Card;
