import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getCompanyAddressAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/indicators`, successCallBack, errorCallBack, dispatch);
};

export const getEmployeeHeaderDataAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/indicators`, successCallBack, errorCallBack, dispatch);
};
