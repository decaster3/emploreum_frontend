/*
 *
 * TestStart actions
 *
 */
import { push } from 'react-router-redux';
import {
  CHANGE_START_TEST_BUTTON_STATUS,
} from './constants';
import { startTestAPI } from '../../../services/api/VacanciesSearch';


export const changeStartTestButtonState = () => ({ type: CHANGE_START_TEST_BUTTON_STATUS });

export const startTest = (vacancyId) => (
  (dispatch) => {
    dispatch(changeStartTestButtonState());
    startTestAPI(vacancyId, () => {
      dispatch(changeStartTestButtonState());
      dispatch(push(`/employee/vacancy/${vacancyId}/test/`));
    }, (err) => {
      console.log(err);
      dispatch(changeStartTestButtonState());
    }, dispatch);
  }
);
