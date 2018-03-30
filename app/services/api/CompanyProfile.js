import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getCompanyProfileMainInfoAPI = (companyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/info/${companyId}`, successCallBack, errorCallBack, dispatch);
};


export const getCompanyRatingAPI = (companyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/rating/${companyId}`, successCallBack, errorCallBack, dispatch);
};

