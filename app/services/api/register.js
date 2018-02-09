import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const loginAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/login`, credentails, successCallBack, errorCallBack, dispatch);

export const registerAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/signup/1`, credentails, successCallBack, errorCallBack, dispatch);

export const sendVerificationCodeAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/signup/2`, credentails, successCallBack, errorCallBack, dispatch);

export const submitEmployeeAboutAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/signup/4`, credentails, successCallBack, errorCallBack, dispatch);

export const submitCompanyAboutAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/signup/4`, credentails, successCallBack, errorCallBack, dispatch);

export const submitEmployeeSpecificationsSkillsAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const obj = {};
  credentails.toJS().forEach((element) => {
    const specification = element.specification;
    obj[specification] = element.items;
  });
  return AxiosService.post(`${BASEURL}/auth/signup/3`, obj, successCallBack, errorCallBack, dispatch);
};
// не тестил
export const submitCompanySpecificationsSkillsAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const specs = [];
  credentails.toJS().forEach((element) => {
    const specification = element.specification;
    specs.push(specification);
  });
  return AxiosService.post(`${BASEURL}/auth/signup/3`, specs, successCallBack, errorCallBack, dispatch);
};

export const logoutTestAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/test/1`, successCallBack, errorCallBack, dispatch);
