/**
*
* Language
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const Language = (props) => {
  const { deleteLanguage, language } = props;
  return (
    <div>
      { language.name }
      <button
        onClick={() => deleteLanguage(language)}
      >
        x
      </button>
    </div>
  );
};

Language.propTypes = {
  deleteLanguage: PropTypes.func,
  language: PropTypes.object,
};

export default Language;
