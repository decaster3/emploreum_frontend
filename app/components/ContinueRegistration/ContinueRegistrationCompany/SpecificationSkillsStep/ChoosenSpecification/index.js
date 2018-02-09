import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSpecification = (props) => {
  const { specification, deleteSpecification } = props;
  return (
    <div className="form-inline">
      <div className="form-group">
        <h4 className="heading">{specification}</h4>
      </div>
      <div className="form-group" style={{ marginLeft: 20 }}>
        <button
          className="btn btn-default btn-xs"
          onClick={() => deleteSpecification(specification)}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

ChoosenSpecification.propTypes = {
  specification: PropTypes.string,
  deleteSpecification: PropTypes.func,
};

export default ChoosenSpecification;
