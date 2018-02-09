/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export const Vacation = (props) => {
  const { position, hoursPerWeek, payment } = props;

  return (
    <tr>
      <td><a href="javascript:void(0)">{position}</a></td>
      <td>{hoursPerWeek}</td>
      <td>{payment}</td>
      <td className="text-right">
        <a href="javascript:void(0)" className="btn btn-default">More</a>
      </td>
    </tr>
  );
};

Vacation.propTypes = {
  position: PropTypes.string.isRequired,
  hoursPerWeek: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
};
