import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getEmployeeRecomendedVacanciesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/vacancy/recommended`, successCallBack, errorCallBack, dispatch);
};

export const submitVacancyAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { id, companyId } = payload;
  AxiosService.post(`${BASEURL}/employee/vacancy/${id}/add`, { companyId }, successCallBack, errorCallBack, dispatch);
};

// /vacancy/recommended
