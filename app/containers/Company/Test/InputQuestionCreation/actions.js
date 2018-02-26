/*
 *
 * InputQuestionCreation actions
 *
 */
import { push } from 'react-router-redux';

import {
  CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS,
} from './constants';
import { createCompanyInputQuestionAPI } from '../../../../services/api/CompanyTests';

const changeSubmitCreationInputQuestionButtonState = () => ({ type: CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS });

export const submitInputQuestion = (values) => (
  (dispatch, getState) => {
    dispatch(changeSubmitCreationInputQuestionButtonState());
    const testId = getState().get('route').get('location').get('pathname').split('/')[3];
    createCompanyInputQuestionAPI({ testId, values }, () => {
      dispatch(push(`/company/tests/${testId}`));
      changeSubmitCreationInputQuestionButtonState();
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
