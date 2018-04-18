/**
*
* AddTestButton
*
*/

import React from 'react';
import TestCreationLink from '../../../../containers/Company/Test/TestCreation/preload';

export const AddTestButton = () => (
  <div className="text-right col-md-12">
    <TestCreationLink
      url={'/company/tests/new'}
      className="btn btn-success"
    >
      Create test
    </TestCreationLink>
  </div>
);


AddTestButton.propTypes = {

};

export default AddTestButton;
