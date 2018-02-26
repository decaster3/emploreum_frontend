import React from 'react';
import PropTypes from 'prop-types';
import TestNavigation from './TestNavigation/Loadable';

export const TestVacancyEmployeeMain = (props) => (
  <TestNavigation
    currentQuestion={props.match.params.question}
    vacancyId={props.match.params.id}
  />
);
TestVacancyEmployeeMain.propTypes = {
  match: PropTypes.object,
};

export default TestVacancyEmployeeMain;
