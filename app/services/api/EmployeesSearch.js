import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getAllEmployeesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/all`, successCallBack, errorCallBack, dispatch);
};

export const getSearchEmployeesAPI = (filtet, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/user/find?filter=${filtet}`, successCallBack, errorCallBack, dispatch);
};
export const startChatAPI = (userId, successCallBack, errorCallBack, dispatch) => {
  const arr = [userId];
  AxiosService.post(`${BASEURL}/message/chats/create`, { users: arr }, successCallBack, errorCallBack, dispatch);
};
