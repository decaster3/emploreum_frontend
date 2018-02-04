import axios from 'axios';
import { push } from 'react-router-redux';
import {
  CHANGE_USER_STATE,
  ANONYMOUS,
  UNAUTHORIZED,
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
    if (err.response.data === UNAUTHORIZED) {
      dispatch({
        type: CHANGE_USER_STATE,
        payload: {
          userState: ANONYMOUS,
          userInformation: {},
        },
      });
      dispatch(push('/login'));
    } else {
      errorCallBack(err);
    }
  });
}

function post(url, obj, successCallBack, errorCallBack, dispatch) {
  return axios.post(url, obj, { withCredentials: true })
    .then((response) =>
      new Promise((resolve) => resolve(successCallBack(response.data)))
    ).catch((err) => {
      if (err.response.data === UNAUTHORIZED) {
        dispatch({
          type: CHANGE_USER_STATE,
          payload: {
            userState: LOGED_IN,
            userInformation: {},
          },
        })
        dispatch(push('/login'));
      } else {
        errorCallBack(err);
      }
    });
}

export default AxiosService;
