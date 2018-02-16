import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getEmployeeRecomendedVacanciesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/vacancy/recommended`, successCallBack, errorCallBack, dispatch);
};

export const submitVacancyAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { id } = payload;
  AxiosService.get(`${BASEURL}/employee/vacancy/${id}/add`, successCallBack, errorCallBack, dispatch);
};

// /vacancy/recommended
