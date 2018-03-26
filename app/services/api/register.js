import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const loginAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/login`, credentails, successCallBack, errorCallBack, dispatch);

export const registerAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/signup/email`, credentails, successCallBack, errorCallBack, dispatch);

export const sendVerificationCodeAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/signup/verification`, credentails, successCallBack, errorCallBack, dispatch);

export const submitEmployeeAboutAPI = (credentails, successCallBack, errorCallBack, dispatch) =>
  AxiosService.post(`${BASEURL}/auth/signup/info`, credentails, successCallBack, errorCallBack, dispatch);

export const submitCompanyAboutAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const { name, about, logo, choosenLanguages } = credentails;
  const languages = [];
  choosenLanguages.items.forEach((el) => {
    languages.push(el.id);
  });
  return AxiosService.post(`${BASEURL}/auth/signup/info`, { languages, name, about, logo }, successCallBack, errorCallBack, dispatch);
};

export const submitAvatarAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const formData = new FormData();
  formData.append('file', credentails);
  return AxiosService.postFile(`${BASEURL}/file/upload`, formData, successCallBack, errorCallBack, dispatch);
};

export const submitEmployeeSpecificationsSkillsAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const specifications = [];
  let specification = {};
  credentails.toJS().forEach((spec) => {
    specification.id = spec.specification.id;
    specification.name = spec.specification.name;
    specification.skills = spec.items;
    specifications.push(specification);
    specification = {};
  });
  return AxiosService.post(`${BASEURL}/auth/signup/specification`, { specifications }, successCallBack, errorCallBack, dispatch);
};

export const submitCompanySpecificationsSkillsAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  const specifications = [];
  credentails.toJS().forEach((element) => {
    specifications.push(element.specification);
  });
  return AxiosService.post(`${BASEURL}/auth/signup/specification`, { specifications }, successCallBack, errorCallBack, dispatch);
};

export const logoutAPI = (successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/auth/logout`, successCallBack, errorCallBack, dispatch);

export const skipRegistrationStepAPI = (successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/auth/signup/skip`, successCallBack, errorCallBack, dispatch);
