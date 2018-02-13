import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getCurrentContractsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/contracts/current`, successCallBack, errorCallBack, dispatch);
};

