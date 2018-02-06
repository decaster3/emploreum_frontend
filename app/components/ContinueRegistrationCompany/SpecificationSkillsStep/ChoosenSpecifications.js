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
        <h4>Specification: {item.specification}</h4>
        <button
          onClick={() => deleteSpecificationFromChoosen(item.specification)}
        >
          Delete spec {item.specification}
        </button>
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
