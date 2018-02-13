import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const submitVacancyAPI = (specifications, other, successCallBack, errorCallBack, dispatch) => {
  const { payment, duration } = other.toJS();
  // исправить
  const pricePerWeek = payment;
  const profiles = [];
  let profile = {};
  specifications.toJS().forEach((element) => {
    profile.id = element.specification.id;
    profile.name = element.specification.name;
    profile.skills = element.items;
    profiles.push(profile);
    profile = {};
  });
  console.log({ profiles, pricePerWeek, duration });
  AxiosService.post(`${BASEURL}/company/vacancy/create`, { profiles, pricePerWeek, duration }, successCallBack, errorCallBack, dispatch);
};

export const getOpenVacanciesAPI = (successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/company/vacancy`, successCallBack, errorCallBack, dispatch);
