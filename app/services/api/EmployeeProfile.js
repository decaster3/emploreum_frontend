import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getEmployeeProfileMainInfoAPI = (employeeId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/info/${employeeId}`, successCallBack, errorCallBack, dispatch);
};

export const getEmployeeSpecificationsSkillsAPI = (employeeId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/skills/${employeeId}`, successCallBack, errorCallBack, dispatch);
};

export const iviteEmployeeToVacancyAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { vacancyId, employeeId } = payload;
  AxiosService.post(`${BASEURL}/company/vacancy/${vacancyId}/invite`, { employeeId }, successCallBack, errorCallBack, dispatch);
};

export const getEmployeeRatingAPI = (employeeId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/rating/${employeeId}`, successCallBack, errorCallBack, dispatch);
};
