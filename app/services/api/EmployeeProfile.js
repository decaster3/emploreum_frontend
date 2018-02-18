import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getEmployeeProfileMainInfoAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/info`, successCallBack, errorCallBack, dispatch);
};

export const getEmployeeSpecificationsSkillsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/skills`, successCallBack, errorCallBack, dispatch);
};
