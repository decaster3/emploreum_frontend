/*
 *
 * InputQuestionCreation actions
 *
 */
import { push } from 'react-router-redux';

import {
  CHANGE_SUBMIT_CREATION_MULTIPLE_QUESTION_BUTTON_STATUS,
} from './constants';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const changeSubmitCreationMultipleQuestionButtonState = () => ({ type: CHANGE_SUBMIT_CREATION_MULTIPLE_QUESTION_BUTTON_STATUS });

export const submitMultipleQuestion = (values) => (
  (dispatch, getState) => {
    dispatch(changeSubmitCreationMultipleQuestionButtonState());
    sleep(1000).then(() => {
      console.log(values.toJS());
      const testId = getState().get('route').get('location').get('pathname').split('/')[3];
      dispatch(push(`/company/tests/${testId}`));
      changeSubmitCreationMultipleQuestionButtonState();
    });
  }
);
