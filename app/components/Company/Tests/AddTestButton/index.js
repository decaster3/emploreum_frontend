/**
*
* AddTestButton
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

export const AddTestButton = () => (
  <div>
    <Link to="/company/tests/new">Create test</Link>
  </div>
);

AddTestButton.propTypes = {

};

export default AddTestButton;
