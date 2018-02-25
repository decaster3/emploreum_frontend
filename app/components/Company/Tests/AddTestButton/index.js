/**
*
* AddTestButton
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

export const AddTestButton = () => (
  <div className="padding-bottom-30 col-lg-12 text-right">
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
