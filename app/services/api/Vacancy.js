import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const submitVacancyAPI = (specs, choosenTest, other, successCallBack, errorCallBack, dispatch) => {
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
  AxiosService.post(`${BASEURL}/company/vacancy/create`, { specifications, weekPayment, duration, testId: choosenTest }, successCallBack, errorCallBack, dispatch);
};

export const getOpenVacanciesAPI = (companyId, successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/company/${companyId}/vacancies`, successCallBack, errorCallBack, dispatch);

export const getCompanyWorkersAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/employees`, successCallBack, errorCallBack, dispatch);
};

export const getCandidatesFromVacancyAPI = (vacancyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/vacancy/${vacancyId}/candidates`, successCallBack, errorCallBack, dispatch);
};

export const acceptCandidateAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { vacancyId, candidateId } = payload;
  const userId = candidateId;
  AxiosService.post(`${BASEURL}/blockchain/approve`, { vacancyId, userId }, successCallBack, errorCallBack, dispatch, 60 * 10 * 1000);
};

export const rejectCandidateAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { vacancyId, candidateId } = payload;
  AxiosService.post(`${BASEURL}/company/vacancy/${vacancyId}/candidate/${candidateId}/reject`, null, successCallBack, errorCallBack, dispatch);
};

