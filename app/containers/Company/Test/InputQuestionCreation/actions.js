/*
 *
 * InputQuestionCreation actions
 *
 */
import { push } from 'react-router-redux';

import {
  CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS,
  CLEAR_INPUT_QUESTION_CREATION,
} from './constants';
import { createCompanyInputQuestionAPI } from '../../../../services/api/CompanyTests';

export const clearReducer = () => ({ type: CLEAR_INPUT_QUESTION_CREATION });
const changeSubmitCreationInputQuestionButtonState = () => ({ type: CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS });

export const submitInputQuestion = (values) => (
  (dispatch, getState) => {
    dispatch(changeSubmitCreationInputQuestionButtonState());
    const testId = getState().get('route').get('location').get('pathname').split('/')[3];
    createCompanyInputQuestionAPI({ testId, values }, () => {
      dispatch(push(`/company/tests/${testId}`));
      dispatch(changeSubmitCreationInputQuestionButtonState());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
