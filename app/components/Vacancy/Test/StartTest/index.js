/**
*
* StartTest
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';


export const StartTest = (props) => {
  const { startingTest, startTest, vacancyId } = props;
  return (
    <div className="panel panel-headline">
      <div className="panel-heading">
        <h3 className="panel-title">
        By clicking on this button you agree to the processing of personal data. You will not have a second attempt to pass the test. In case you fail the test, you will never be able to submit your resume for this job
          </h3>
      </div>
      <div className="panel-body padding-bottom-30">
      The company itself sets the percentage of right answers. By clicking on this button you agree with the rule of non-disclosure of the questions seen.
      </div>
      <div className="panel-footer text-right">
        <button
          onClick={() => startTest(vacancyId)}
          className="btn btn-success"
          disabled={startingTest}
        >
          { startingTest
              ? <SyncLoader color={'#ffffff'} size={5} />
              : <span>Start test</span>
          }
        </button>
      </div>
    </div>
  );
};

StartTest.propTypes = {
  startingTest: PropTypes.bool,
  startTest: PropTypes.func,
  vacancyId: PropTypes.string,
};

export default StartTest;
