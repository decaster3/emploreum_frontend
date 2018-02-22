import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getLanguagesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/contracts/current`, successCallBack, errorCallBack, dispatch);
};
