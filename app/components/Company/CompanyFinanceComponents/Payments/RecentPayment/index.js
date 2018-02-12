/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export const Payment = (props) => {
  const { address, name, payment, date } = props;

  return (
    <tr>
      <td>
        <a href="javascript:void(0)" onClick={() => addToClipboard(address)}>Copy address!</a>
      </td>
      <td><a href="">{name}</a></td>
      <td>{payment} <i className="fa fa-dollar"></i></td>
      <td>{date}</td>
    </tr>
  );
};

function addToClipboard(address) {
  const textField = document.createElement('textarea');
  textField.innerText = address;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
  alert(`Copied the text: ${address}`);
}

Payment.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  payment: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default Payment;
