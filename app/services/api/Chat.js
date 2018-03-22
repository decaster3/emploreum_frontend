import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getInterlocatorsAPI = (successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/message/chats/all`, successCallBack, errorCallBack, dispatch);

export const getMessagesByIdAPI = (id, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/message/chat/${id}/all`, successCallBack, errorCallBack, dispatch);
};

export const createMessageAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  AxiosService.post(`${BASEURL}/message/create`, payload, successCallBack, errorCallBack, dispatch);
};
