import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getCompanyProfileMainInfoAPI = (companyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/info/${companyId}`, successCallBack, errorCallBack, dispatch);
};
