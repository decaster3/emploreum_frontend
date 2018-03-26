/**
*
* Find
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { BASEURL } from '../../../../global-constants';

function Find(props) {
  return (
    <div className="col-xs-12" id="search">
      <div className="dark-background" />
      <div className="row">
        <div className="col-sm-12 col-md-8 col-md-offset-2">
          <div className="col-md-8 no-padding">
            <input type="text" className="form-control" placeholder="Search for..." />
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6 no-padding">
                <select className="form-control">
                  <option>Vacancies</option>
                  <option>Employee</option>
                </select>
              </div>
              <button className="btn btn-primary col-md-6" type="button">Go!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Find.propTypes = {
  mainInfoStatus: PropTypes.string,
};

export default Find;
