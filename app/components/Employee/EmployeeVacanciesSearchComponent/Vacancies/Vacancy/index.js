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
    profile,
    weekPaymeent,
    companyName,
    acceptableCurrencies,
    description,
    contractDuration,
    id } = props;

  const currencies = acceptableCurrencies.map((currency) =>
    (<Currency
      key={currency}
      name={currency}
    />)
  );
  const url = `vacancy/${id}`;
  return (
    <div className="vacancy">
      <div className="vacancy-name">
        <a href="">{ profile }</a>
        <div className="vacancy-money badge">{ weekPaymeent }</div>
        <div className="vacancy-currency">
          <p><a href="">{ companyName }</a></p>
          <div className="clearfix"></div>
          платят :
          { currencies }
        </div>
      </div>
      <div className="vacancy-desc">
        <p> { description } </p>
        <div className="vacancy-add">
          <Link to={url}>Details</Link>
        </div>
        <div className="vacancy-contact">
          <a href="">Contacts</a>
        </div>
        <div className="vacancy-date">
          { contractDuration }
        </div>
      </div>
    </div>
  );
};
//
Vacancy.propTypes = {
  contractDuration: PropTypes.string,
  weekPaymeent: PropTypes.string,
  profile: PropTypes.string,
  description: PropTypes.string,
  companyName: PropTypes.string,
  acceptableCurrencies: PropTypes.array,
  id: PropTypes.string,
};

export default Vacancy;
