/**
*
* AddTestButton
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

export const AddTestButton = () => (
  <div className="text-right col-md-12">
    <Link
      to="/company/tests/new"
      className="btn btn-success"
    >
      Create test
    </Link>
  </div>
);


AddTestButton.propTypes = {

};

export default AddTestButton;
