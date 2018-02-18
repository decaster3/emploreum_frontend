/**
*
* Detail
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import EnrollVacancy from '../../EnrollVacancy/Loadable';

export const Detail = (props) => {
  const { vacancyId, role, enrollVacancy, mainInfo } = props;
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
        {role === 'EMPLOYEE'
          ? <EnrollVacancy
            vacancyId={vacancyId}
            enrollVacancy={enrollVacancy}
          />
          : <div />
        }
      </div>
    </div>
  );
};

Detail.propTypes = {
  role: PropTypes.string,
  vacancyId: PropTypes.string,
  enrollVacancy: PropTypes.func,
  mainInfo: PropTypes.object,
};

export default Detail;
