/**
*
* Vacancy
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Currency from '../Currency/Loadable';
import { ANONYMOUS } from '../../../../../containers/UserSession/constants';

export const Vacancy = (props) => {
  const {
    // specifications,
    weekPaymeent,
    companyName,
    acceptableCurrencies,
    info,
    duration,
    userState,
    userRole,
    name,
    id } = props;

  // let position = '';
  // // specifications.forEach((prof) => {
  // //   position = `${position} ${prof.name}`;
  // // });
  const currencies = acceptableCurrencies.map((currency) =>
    (<Currency
      key={currency}
      name={currency}
    />)
  );
  let url;
  if (userState === ANONYMOUS) {
    url = `/vacancy/${id}`;
  } else if (userRole === 'COMPANY') {
    url = `/company/vacancy/${id}/`;
  } else {
    url = `/employee/vacancy/${id}/`;
  }
  // const url = userState === ANONYMOUS
  // ? `/vacancy/${id}`
  // : userRole === 'COMPANY' ? `company/vacancy/${id}/` : `employee/vacancy/${id}/`;
  return (
    <div className="vacancy">
      <div className="vacancy-name">
        <h4>{ name }</h4>
        {/* <Link to={url}>{ position } developer </Link> */}
        <div className="vacancy-money badge">{ weekPaymeent }</div>
        <div className="vacancy-currency">
          <p><a href="">{ companyName }</a></p>
          <div className="clearfix"></div>
          currency :
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
  name: PropTypes.string,
  userRole: PropTypes.string,
  userState: PropTypes.string,
  duration: PropTypes.string,
  weekPaymeent: PropTypes.string,
  // specifications: PropTypes.array,
  info: PropTypes.string,
  companyName: PropTypes.string,
  acceptableCurrencies: PropTypes.array,
  id: PropTypes.string,
};

export default Vacancy;
