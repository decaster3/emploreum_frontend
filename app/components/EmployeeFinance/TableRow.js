import React from 'react';
import PropTypes from 'prop-types';

export const TableRow = (props) => {
  const { address, company, salary, startDay, endDay } = props;

  return (
    <tr>
      <td>
        <a href="javascript:void(0)" onClick={() => addToClipboard(address)}>Copy address!</a>
      </td>
      <td>{company}</td>
      <td>{salary}<i className="fa fa-dollar"></i></td>
      <td>{startDay}</td>
      <td>{endDay}</td>
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
  alert('Copied the text: ' + address);
}
TableRow.propTypes = {
  address: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  startDay: PropTypes.string.isRequired,
  endDay: PropTypes.string.isRequired,
};
