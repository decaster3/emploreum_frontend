/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import {
  CHANGE_SUBMIT_VACANCY_BUTTON_STATUS,
} from './constants';
import {
  submitVacancyAPI,
} from '../../../services/api/Vacancy';

export const changeSubmitSpecificationButtonState = () => ({ type: CHANGE_SUBMIT_VACANCY_BUTTON_STATUS });

const notify = () => toast('Vacancy succesfully created!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });

export const createVacancy = (values) => (
  (dispatch, getState) => {
    const arrOfChoosenSpecificationsSkills = getState().get('vacancyCreation')
      .get('choosenSpecifications').get('items');
    return submitVacancyAPI(arrOfChoosenSpecificationsSkills, values.toJS(),
      () => {
        dispatch(push('/company/finance'));
        notify();
      },
      (err) => {
        console.log(err);
      }, dispatch);
  }
);
