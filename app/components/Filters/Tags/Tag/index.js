/**
*
* Tag
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const Tag = (props) => {
  const { deleteTag, tag, reload } = props;
  return (
    <div className="label label-primary em-tag">
      { typeof tag === 'object' ? tag.name : tag }
      <button
        onClick={() => { deleteTag(tag); reload(); }}
      >
        x
      </button>
    </div>
  );
};

Tag.propTypes = {
  reload: PropTypes.func,
  deleteTag: PropTypes.func,
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default Tag;
