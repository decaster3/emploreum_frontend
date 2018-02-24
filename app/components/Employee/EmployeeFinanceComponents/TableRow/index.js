import React from 'react';
import PropTypes from 'prop-types';

export const TableRow = (props) => {
  const { rows } = props;
  const renderRows = rows.map((row) => (
    <td key={row}>{row}</td>
  ));
  return (
    <tr>
      {renderRows}
    </tr>
  );
};

TableRow.propTypes = {
  rows: PropTypes.array,
};

export default TableRow;
