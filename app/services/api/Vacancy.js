import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const submitVacancyAPI = (specs, other, successCallBack, errorCallBack, dispatch) => {
  const { weekPayment, duration } = other;
  const specifications = [];
  let specification = {};
  specs.toJS().forEach((element) => {
    specification.id = element.specification.id;
    specification.name = element.specification.name;
    specification.skills = element.items;
    specifications.push(specification);
    specification = {};
  });
  AxiosService.post(`${BASEURL}/company/vacancy/create`, { specifications, weekPayment, duration }, successCallBack, errorCallBack, dispatch);
};

export const getOpenVacanciesAPI = (successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/company/vacancy`, successCallBack, errorCallBack, dispatch);
