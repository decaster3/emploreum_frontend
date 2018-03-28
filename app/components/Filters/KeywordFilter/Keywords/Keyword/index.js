/**
*
* Keyword
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const Keyword = (props) => {
  const { deleteKeyword, keyword } = props;
  return (
    <div className="label label-primary em-tag">
      { keyword }
      <button
        onClick={() => deleteKeyword(keyword)}
      >
        x
      </button>
    </div>
  );
};

Keyword.propTypes = {
  deleteKeyword: PropTypes.func,
  keyword: PropTypes.string,
};

export default Keyword;
