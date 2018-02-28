import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getCompanyTrasactionsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/transactions`, successCallBack, errorCallBack, dispatch);
};
