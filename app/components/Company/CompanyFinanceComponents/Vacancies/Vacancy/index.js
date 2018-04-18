/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Vacancy = (props) => {
  const { specifications, duration, weekPayment, id } = props;
  let position = '';
  specifications.forEach((prof) => {
    position = `${position} ${prof.name}`;
  });
  const url = `vacancy/${id}`;
  return (
    <tr>
      <td><Link to={url}>{position} developer</Link></td>
      <td>{duration} month(s)</td>
      <td>{weekPayment} eth</td>
      <td className="text-right">
        <Link to={url} className="btn btn-default">More</Link>
      </td>
    </tr>
  );
};

Vacancy.propTypes = {
  specifications: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
  weekPayment: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Vacancy;
