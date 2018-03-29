import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getAllEmployeesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/all`, successCallBack, errorCallBack, dispatch);
};

export const getSearchEmployeesAPI = (filters, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/user/search?filters=${filters}`, successCallBack, errorCallBack, dispatch);
};
