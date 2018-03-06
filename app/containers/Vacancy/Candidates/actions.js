/*
 *
 * Candidates actions
 *
 */
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import {
  CHANGE_STATE_CANDIDATES,
  GET_CANDIDATES,
  LOADING,
  LOADED,
} from './constants';
import {
  getCandidatesFromVacancyAPI,
  acceptCandidateAPI,
  rejectCandidateAPI,
} from '../../../services/api/Vacancy';

const notify = () => toast('Contracts are created! Vacancy closed!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });

export const loadingCandidates = () => ({ type: CHANGE_STATE_CANDIDATES, payload: LOADING });
export const loadedCandidates = () => ({ type: CHANGE_STATE_CANDIDATES, payload: LOADED });

export const getCandidates = (id) => (
  (dispatch) => {
    dispatch(loadingCandidates());
    return getCandidatesFromVacancyAPI(id, (data) => {
      dispatch({
        type: GET_CANDIDATES,
        payload: data,
      });
      dispatch(loadedCandidates());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const acceptCandidate = (candidateId, vacancyId) => (
  (dispatch) => {
    acceptCandidateAPI({ candidateId, vacancyId }, () => {
      dispatch(push('/company/finance'));
      notify();
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const rejectCandidate = (candidateId, vacancyId) => (
  (dispatch) => {
    rejectCandidateAPI({ candidateId, vacancyId }, () => {
      dispatch(getCandidates(vacancyId));
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
