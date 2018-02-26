import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getVacancyTestQuestionsAPI = (vacancyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/test/vacancy/${vacancyId}`, successCallBack, errorCallBack, dispatch);
};

export const getVacancyTestQuestionAPI = (testId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/test/question/${testId}`, successCallBack, errorCallBack, dispatch);
};

