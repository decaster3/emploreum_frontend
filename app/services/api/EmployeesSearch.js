import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getAllEmployeesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/all`, successCallBack, errorCallBack, dispatch);
};
