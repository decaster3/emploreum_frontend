/*
 *
 * MainInformation actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
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
  (dispatch, getState) => {
    if (getState().get('companyProfileRating').get('rating').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    getCompanyRatingAPI(employeeId, (data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_RATING,
        payload: data,
      });
      dispatch(loadedCompanyRating());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
