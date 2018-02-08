import React from 'react';
import PropTypes from 'prop-types';
const ChoosenSpecifications = (props) => {
  const {
    choosenSpecifications,
    deleteSpecificationFromChoosen,
  } = props;
  let choosenSpec = <div>Choose specification please</div>;
  if (choosenSpecifications.toJS().length > 0) {
    choosenSpec = choosenSpecifications.toJS().map((item) =>
      (<div key={item.specification}>
        <div className="form-inline">
          <div className="form-group">
            <h4 className="heading">{item.specification}</h4>
          </div>
          <div className="form-group" style={{ marginLeft: 20 }}>
            <button
              className="btn btn-default btn-xs"
              onClick={() => deleteSpecificationFromChoosen(item.specification)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
      </div>)
    );
  }
  return (
    <div>
      {choosenSpec}
    </div>
  );
};

ChoosenSpecifications.propTypes = {
  choosenSpecifications: PropTypes.object,
  deleteSpecificationFromChoosen: PropTypes.func,
};

export default ChoosenSpecifications;
