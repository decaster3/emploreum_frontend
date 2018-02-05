import React from 'react';
import PropTypes from 'prop-types';

export const ContractCard = (props) => {
  const { imgSrc, employee, company, position } = props;

  return (
    <div>
      <img src={imgSrc} alt={'employee'} onError={(e) => { e.target.src = '/assets/img/defaultPhoto.png'; }} />
      <h4>enough during: {period} week(s)</h4>
      <h4>expenditure: {expenditure} eth per week</h4>
    </div>
  );
};

ContractCard.propTypes = {
  balance: PropTypes.number,
  expenditure: PropTypes.number,
  imgSrc: PropTypes.string,
};
