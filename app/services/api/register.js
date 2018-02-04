import AxiosService from '../AxiosService';

const baseURL = 'http://192.168.0.105:3000';

export const loginAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${baseURL}/login`, credentails, successCallBack, errorCallBack, dispatch);
