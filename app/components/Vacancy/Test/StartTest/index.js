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
            BL bla blajweo; gjwoeqngqwoei ngwengowqegnwqp;oe g nweignwo qgnw qepngwqe lkgnwklej gbw ekgbw qejhg
          </h3>
      </div>
      <div className="panel-body padding-bottom-30">
        bla bla blaq;jwn ewgwqg nwrgwrgqj;wg;j ogqrwj;w;jw gjkwegqnk wgrklgweqklwg rkqwgqkklbwg lbkgwer gwe
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
