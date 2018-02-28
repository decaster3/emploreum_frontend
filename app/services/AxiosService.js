import axios from 'axios';
import { push } from 'react-router-redux';
import {
  CHANGE_USER_STATE,
  ANONYMOUS,
} from '../containers/UserSession/constants';

const AxiosService = {
  get,
  post,
};

function get(url, successCallBack, errorCallBack, dispatch) {
  axios.get(url, { withCredentials: true })
  .then((response) =>
    new Promise((resolve) => resolve(successCallBack(response.data)))
  ).catch((err) => {
    errorCallBack(err);
    if (err.response.status && (err.response.status === 401 || err.response.status === 403)) {
      dispatch({
        type: CHANGE_USER_STATE,
        payload: {
          userState: ANONYMOUS,
          userInformation: {},
        },
      });
      dispatch(push('/'));
    }
  });
}

function post(url, obj, successCallBack, errorCallBack, dispatch, ...args) {
  const timeout = args[0] || 1000;
  return axios.post(url, obj, { withCredentials: true, timeout })
    .then((response) =>
      new Promise((resolve) => resolve(successCallBack(response.data)))
    ).catch((err) => {
      if (err.response.status && (err.response.status === 401 || err.response.status === 403)) {
        dispatch({
          type: CHANGE_USER_STATE,
          payload: {
            userState: ANONYMOUS,
            userInformation: {},
          },
        });
        dispatch(push('/'));
      }
      return new Promise((resolve) => resolve(errorCallBack(err)));
    });
}

export default AxiosService;
