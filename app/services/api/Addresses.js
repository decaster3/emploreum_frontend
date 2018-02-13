import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getCompanyAddressAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/address`, successCallBack, errorCallBack, dispatch);
};

export const getEmployeeAddressAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/address`, successCallBack, errorCallBack, dispatch);
};
