import React from 'react';
import PropTypes from 'prop-types';

const ChoosenLanguages = (props) => {
  const { language, deleteLanguage } = props;
  return (
    <div>
      <div className="form-inline">
        <div className="form-group">
          <h4 className="heading">{language}</h4>
        </div>
        <div className="form-group" style={{ marginLeft: 20 }}>
          <button
            className="btn btn-default btn-xs"
            onClick={() => deleteLanguage(language)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  );
};

ChoosenLanguages.propTypes = {
  language: PropTypes.string,
  deleteLanguage: PropTypes.func,
};

export default ChoosenLanguages;
