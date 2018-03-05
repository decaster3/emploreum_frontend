import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getEmployeeRecomendedVacanciesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/vacancy/recommended`, successCallBack, errorCallBack, dispatch);
};

export const startTestAPI = (vacancyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/test/${vacancyId}/start`, successCallBack, errorCallBack, dispatch);
};

export const enrollVacancyAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { id } = payload;
  AxiosService.get(`${BASEURL}/employee/vacancy/enroll/${id}`, successCallBack, errorCallBack, dispatch);
};

export const getCompanyInfoAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { id } = payload;
  AxiosService.get(`${BASEURL}/company/info/vacancy/${id}`, successCallBack, errorCallBack, dispatch);
};

export const getVacancyInfoAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { id } = payload;
  AxiosService.get(`${BASEURL}/company/vacancy/info/${id}`, successCallBack, errorCallBack, dispatch);
};

export const getSpecificationsSkillsVacancyInfoAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { id } = payload;
  AxiosService.get(`${BASEURL}/company/vacancy/${id}/specification`, successCallBack, errorCallBack, dispatch);
};

export const checkEnrollAvailabilityAPI = (vacancyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/vacancy/${vacancyId}/available`, successCallBack, errorCallBack, dispatch);
};

export const submitVacancyAPI = (data, successCallBack, errorCallBack, dispatch) => {
  dispatch();
  setTimeout(1000, () => {
    successCallBack();
  });
};
