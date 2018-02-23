/*
 *
 * TestCreation actions
 *
 */
import { push } from 'react-router-redux';
import {
  CHANGE_SUBMIT_CREATION_TEST_BUTTON_STATUS,
} from './constants';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const changeSubmitTestCreationButtonState = () => ({ type: CHANGE_SUBMIT_CREATION_TEST_BUTTON_STATUS });

const mockTestId = 4;
export const createTest = (values) => (
  (dispatch, getState) => {
    const { testName } = values;
    const arrOfChoosenSpecifications = getState().get('specificationsSkillsTestCreation')
      .get('choosenSpecifications').get('items');
    dispatch(changeSubmitTestCreationButtonState());
    sleep(1000).then(() => {
      dispatch(changeSubmitTestCreationButtonState());
      dispatch(push(`/company/tests/${mockTestId}`));
    });
    console.log(testName);
    console.log(arrOfChoosenSpecifications);
  }
);
