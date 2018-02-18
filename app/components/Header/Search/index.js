/**
*
* Search
*
*/

import React from 'react';
// import styled from 'styled-components';

export const Search = () => (
  <form className="navbar-form navbar-left">
    <div className="input-group">
      <input type="text" value="" className="form-control" placeholder="Search" />
      <span className="input-group-btn"><button type="button" className="btn btn-primary">Search</button></span>
    </div>
  </form>
);

Search.propTypes = {

};

export default Search;
