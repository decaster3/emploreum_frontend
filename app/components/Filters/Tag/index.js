/**
*
* Tag
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const Tag = (props) => {
  const { deleteTag, tag } = props;
  return (
    <div className="label label-primary em-tag">
      { tag }
      <button
        onClick={() => deleteTag(tag)}
      >
        x
      </button>
    </div>
  );
};

Tag.propTypes = {
  deleteTag: PropTypes.func,
  tag: PropTypes.string,
};

export default Tag;
