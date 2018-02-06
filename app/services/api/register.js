import AxiosService from '../AxiosService';

const baseURL = 'http://192.168.0.107:3000';

export const loginAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${baseURL}/auth/login`, credentails, successCallBack, errorCallBack, dispatch);

export const registerAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${baseURL}/auth/signup/1`, credentails, successCallBack, errorCallBack, dispatch);

export const sendVerificationCodeAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${baseURL}/auth/signup/2`, credentails, successCallBack, errorCallBack, dispatch);

export const submitEmployeeAboutAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  return AxiosService.post(`${baseURL}/auth/signup/4`, credentails, successCallBack, errorCallBack, dispatch);
};

export const submitCompanyAboutAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  return AxiosService.post(`${baseURL}/auth/signup/4`, credentails, successCallBack, errorCallBack, dispatch);
};

export const getSpecificationsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${baseURL}/specialisation/profiles`, successCallBack, errorCallBack, dispatch);
};

export const getSkillsFromSpecificationAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${baseURL}/specialisation/skills?profile=${credentails}`, successCallBack, errorCallBack, dispatch);
};

export const submitEmployeeSpecificationsSkillsAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const obj = {};
  credentails.toJS().forEach((element) => {
    const specification = element.specification;
    obj[specification] = element.items;
  });
  return AxiosService.post(`${baseURL}/auth/signup/3`, obj, successCallBack, errorCallBack, dispatch);
};
// не тестил
export const submitCompanySpecificationsSkillsAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const arr = [];
  credentails.toJS().forEach((element) => {
    const specification = element.specification;
    arr.push(specification);
  });
  return AxiosService.post(`${baseURL}/auth/signup/3`, arr, successCallBack, errorCallBack, dispatch);
};

export const logoutTestAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${baseURL}/test/1`, successCallBack, errorCallBack, dispatch);
