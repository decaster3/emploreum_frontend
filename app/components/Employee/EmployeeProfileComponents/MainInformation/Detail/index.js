/**
*
* Detail
*
*/

import React from 'react';
// import styled from 'styled-components';


function Detail() {
  return (
    <div className="profile-info">
      <h4 className="heading">Личная информация</h4>
      <ul className="list-unstyled list-justify">
        <li>Возраст <span>20 лет</span></li>
        <li>Пол <span>Мужской</span></li>
        <li>Образование <span>Высшее</span></li>
        <li>Проживание <span>г. Казань</span></li>
        <li>Языки <span>Английский, Русский</span></li>
        <li>Профиль<span>Фулл стек</span></li>
        <li>Занятость<span> От 4 до 10 часов </span></li>
        <li>
          <span>
            <a
              href=""
              data-toggle="modal"
              data-target="#feed-modal"
            >связаться</a>
            <i className="fa fa-angle-right"></i>
          </span>
        </li>
      </ul>
    </div>
  );
}

Detail.propTypes = {

};

export default Detail;
