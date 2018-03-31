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

import { getCompanyRatingAPI } from './../../../services/api/CompanyProfile';

export const loadingCompanyRating = () => ({ type: CHANGE_STATE_RATING, payload: LOADING });
export const loadedCompanyRating = () => ({ type: CHANGE_STATE_RATING, payload: LOADED });


export const getCompanyRating = (employeeId) => (
  (dispatch) =>
    // dispatch(loadingCompanyRating());
     getCompanyRatingAPI(employeeId, (data) => {
       dispatch({
         type: GET_RATING,
         payload: data,
       });
       dispatch(loadedCompanyRating());
     }, (err) => {
       console.log(err);
     }, dispatch)
);
