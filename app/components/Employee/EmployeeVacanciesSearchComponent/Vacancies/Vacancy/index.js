/**
*
* Vacancy
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Currency from '../Currency/Loadable';
// import styled from 'styled-components';
export const Vacancy = (props) => {
  const {
    specifications,
    weekPaymeent,
    companyName,
    acceptableCurrencies,
    info,
    duration,
    id } = props;

  let position = '';
  specifications.forEach((prof) => {
    position = `${position} ${prof.name}`;
  });
  const currencies = acceptableCurrencies.map((currency) =>
    (<Currency
      key={currency}
      name={currency}
    />)
  );
  const url = `vacancy/${id}/`;
  return (
    <div className="vacancy">
      <div className="vacancy-name">
        <Link to={url}>{ position } developer </Link>
        <div className="vacancy-money badge">{ weekPaymeent }</div>
        <div className="vacancy-currency">
          <p><a href="">{ companyName }</a></p>
          <div className="clearfix"></div>
          платят :
          { currencies }
        </div>
      </div>
      <div className="vacancy-desc">
        <p> { info } </p>
        <div className="vacancy-add">
          <Link to={url}>Details</Link>
        </div>
        <div className="vacancy-contact">
          <a href="">Contacts</a>
        </div>
        <div className="vacancy-date">
          { duration } month(s)
        </div>
      </div>
    </div>
  );
};
//
Vacancy.propTypes = {
  duration: PropTypes.string,
  weekPaymeent: PropTypes.string,
  specifications: PropTypes.array,
  info: PropTypes.string,
  companyName: PropTypes.string,
  acceptableCurrencies: PropTypes.array,
  id: PropTypes.string,
};

export default Vacancy;
