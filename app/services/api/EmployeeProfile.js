import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getEmployeeProfileMainInfoAPI = (employeeId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/info/${employeeId}`, successCallBack, errorCallBack, dispatch);
};

export const getEmployeeSpecificationsSkillsAPI = (employeeId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/skills/${employeeId}`, successCallBack, errorCallBack, dispatch);
};
