/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';
import {
  CHANGE_SUBMIT_VACANCY_BUTTON_STATUS,
} from './constants';
import {
  submitVacancyAPI,
} from '../../../services/api/Vacancy';
import { clear } from '../../SpecificationsSkills/actions';


export const changeSubmitSpecificationButtonState = () => ({ type: CHANGE_SUBMIT_VACANCY_BUTTON_STATUS });

export const createVacancy = (values) => (
  (dispatch, getState) => {
    const arrOfChoosenSpecificationsSkills = getState().get('vacancyCreation')
      .get('choosenSpecifications').get('items');
    return submitVacancyAPI(arrOfChoosenSpecificationsSkills, values.toJS(),
      () => {
        dispatch(clear());
        dispatch(push('/company/finance'));
      },
      (err) => {
        console.log(err);
      }, dispatch);
  }
);
