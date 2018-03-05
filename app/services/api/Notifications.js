import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getNotificationsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/message/notifications`, successCallBack, errorCallBack, dispatch);
};

export const readNotificationsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/message/notifications/read`, successCallBack, errorCallBack, dispatch);
};
