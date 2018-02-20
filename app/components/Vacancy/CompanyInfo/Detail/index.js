/**
*
* Detail
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Detail = (props) => {
  const { mainInfo } = props;
  return (
    <div className="profile-detail" id="sticky-social">
      <div className="profile-info">
        <h4 className="heading">Информация о вакансии</h4>
        <ul className="list-unstyled list-justify">
          <li>Занятость <span>8 часов</span></li>
          <li>Тип работы <span>Удаленно</span></li>
          <li>Профиль <span>Фронт</span></li>
          <li>Образование <span>Высшее</span></li>
          <li>Оплата<span>
          </span></li>
        </ul>
        <h4 className="heading padding-top-30">Информация о компании</h4>
        <div className="com-desc">
          <strong>{mainInfo.name}</strong>
          {mainInfo.info}
          <a href="">подробнее</a>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  mainInfo: PropTypes.object,
};

export default Detail;
