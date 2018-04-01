import axios from 'axios';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import {
  CHANGE_USER_STATE,
  ANONYMOUS,
} from '../containers/UserSession/constants';

const AxiosService = {
  get,
  post,
  postFile,
};

const notifyBadConnection = () => toast('Lost connection to the server. Please check the connection to the Internet.', { hideProgressBar: true, autoClose: 10000, type: toast.TYPE.ERROR });
const sessionOut = () => toast('Your session is deprecated, for security reasons, please re-enter the application', { hideProgressBar: true, autoClose: 10000, type: toast.TYPE.ERROR });

function get(url, successCallBack, errorCallBack, dispatch) {
  return axios.get(
    url,
    { withCredentials: true,
    },
  )
  .then((response) =>
    new Promise((resolve) => resolve(successCallBack(response.data)))
  ).catch((err) => {
    if (err.response) {
      if ((err.response.status === 401 || err.response.status === 403)) {
        dispatch({
          type: CHANGE_USER_STATE,
          payload: {
            userState: ANONYMOUS,
            userInformation: {},
          },
        });
        dispatch(push('/'));
        sessionOut();
      }
    } else {
      toast.dismiss();
      notifyBadConnection();
    }
    return new Promise((resolve) => resolve(errorCallBack(err)));
  });
}

function post(url, obj, successCallBack, errorCallBack, dispatch, ...args) {
  const timeout = args[0] || 1000;
  return axios.post(url, obj, { withCredentials: true, timeout })
    .then((response) =>
      new Promise((resolve) => resolve(successCallBack(response.data)))
    ).catch((err) => {
      if (err.response.status) {
        if (err.response.status === 401 || err.response.status === 403) {
          dispatch({
            type: CHANGE_USER_STATE,
            payload: {
              userState: ANONYMOUS,
              userInformation: {},
            },
          });
          dispatch(push('/'));
          sessionOut();
        }
      } else {
        toast.dismiss();
        notifyBadConnection();
      }
      return new Promise((resolve) => resolve(errorCallBack(err)));
    });
}

function postFile(url, obj, successCallBack, errorCallBack, dispatch) {
  return axios.post(url, obj,
    { withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      } })
    .then((response) =>
      new Promise((resolve) => resolve(successCallBack(response.data)))
    ).catch((err) => {
      if (err.response.status) {
        if (err.response.status === 401 || err.response.status === 403) {
          dispatch({
            type: CHANGE_USER_STATE,
            payload: {
              userState: ANONYMOUS,
              userInformation: {},
            },
          });
          dispatch(push('/'));
          sessionOut();
        } else {
          toast.dismiss();
          notifyBadConnection();
        }
      }
      return new Promise((resolve) => resolve(errorCallBack(err)));
    });
}

export default AxiosService;
