import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getNotificationsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/message/new`, successCallBack, errorCallBack, dispatch);
};
