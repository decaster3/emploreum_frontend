/*
 *
 * MainInformation actions
 *
 */

import {
  CHANGE_STATE_RATING,
  LOADING,
  LOADED,
  GET_RATING,
} from './constants';

import { getEmployeeRatingAPI } from './../../../services/api/EmployeeProfile';

export const loadingEmployeeRating = () => ({ type: CHANGE_STATE_RATING, payload: LOADING });
export const loadedEmployeeRating = () => ({ type: CHANGE_STATE_RATING, payload: LOADED });


export const getEmployeeRating = (employeeId) => (
  (dispatch) => {
    dispatch(loadingEmployeeRating());
    return getEmployeeRatingAPI(employeeId, (data) => {
      dispatch({
        type: GET_RATING,
        payload: data.rating,
      });
      dispatch(loadedEmployeeRating());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
