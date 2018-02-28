/*
 *
 * InputQuestionCreation actions
 *
 */
import { push } from 'react-router-redux';

import {
  CHANGE_SUBMIT_CREATION_MULTIPLE_QUESTION_BUTTON_STATUS,
  CLEAR_MULTIPLE_QUESTION_CREATION,
} from './constants';
import { createCompanyMultipleQuestionAPI } from '../../../../services/api/CompanyTests';

export const clearReducer = () => ({ type: CLEAR_MULTIPLE_QUESTION_CREATION });
const changeSubmitCreationMultipleQuestionButtonState = () => ({ type: CHANGE_SUBMIT_CREATION_MULTIPLE_QUESTION_BUTTON_STATUS });

export const submitMultipleQuestion = (values) => (
  (dispatch, getState) => {
    dispatch(changeSubmitCreationMultipleQuestionButtonState());
    const testId = getState().get('route').get('location').get('pathname').split('/')[3];
    createCompanyMultipleQuestionAPI({ testId, values }, () => {
      dispatch(push(`/company/tests/${testId}`));
      changeSubmitCreationMultipleQuestionButtonState();
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
