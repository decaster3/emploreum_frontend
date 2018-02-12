import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSpecification = (props) => {
  const { specification, deleteSpecification } = props;
  return (
    <div>
      <div className="form-inline">
        <div className="form-group">
          <h4 className="heading">{specification.name}</h4>
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
      <div className="clearfix" />
    </div>
  );
};

ChoosenSpecification.propTypes = {
  specification: PropTypes.object,
  deleteSpecification: PropTypes.func,
};

export default ChoosenSpecification;
