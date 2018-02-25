/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Vacancy = (props) => {
  const { position, hoursPerWeek, payment, id } = props;
  const url = `vacancy/${id}`;
  return (
    <tr>
      <td><a href="javascript:void(0)">{position}</a></td>
      <td>{hoursPerWeek}</td>
      <td>{payment}</td>
      <td className="text-right">
        <Link to={url} className="btn btn-default">More</Link>
      </td>
    </tr>
  );
};

Vacancy.propTypes = {
  position: PropTypes.string.isRequired,
  hoursPerWeek: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Vacancy;
