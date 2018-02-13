import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getEmployeeRecomendedVacanciesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/vacancy/recommended`, successCallBack, errorCallBack, dispatch);
};

export const submitVacancyAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { id, company_id } = payload;
  AxiosService.post(`${BASEURL}/employee/vacancy/${id}/add`, { company_id }, successCallBack, errorCallBack, dispatch);
};

// /vacancy/recommended
