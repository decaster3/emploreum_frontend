/**
*
* Language
*
*/

import React from 'react';
// import styled from 'styled-components';


export const Language = () => (
  <li className="dropdown">
    <a href="" className="dropdown-toggle" data-toggle="dropdown">
      <img src="/ru.png" className="img-circle icon-64" alt="ru" /> <span>Ru</span>
      <i className="icon-submenu fa fa-angle-down"></i>
    </a>
    <ul className="dropdown-menu">
      <li>
        <a href="">
          <img src="/us.png" className="img-circle icon-64" alt="us" />
          <span>Us</span>
        </a>
      </li>
    </ul>
  </li>
);

Language.propTypes = {

};

export default Language;
