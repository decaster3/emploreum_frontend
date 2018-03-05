import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getVacancyTestQuestionsAPI = (vacancyId, successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/test/vacancy/${vacancyId}`, successCallBack, errorCallBack, dispatch);

export const getVacancyTestQuestionAPI = (testId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/test/question/${testId}`, successCallBack, errorCallBack, dispatch);
};

export const submitTestAPI = (vacancyId, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/test/${vacancyId}/submit`, successCallBack, errorCallBack, dispatch);
};

export const submitVacancyTestQuestionAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { answers, type, questionId } = payload;
  const arr = [];
  if (type === 'input') {
    arr.push(answers.answer);
  } else {
    Object.keys(answers).forEach((el) => {
      if (answers[el]) {
        arr.push(el);
      }
    });
  }
  AxiosService.post(`${BASEURL}/test/question/${questionId}/answer`, arr, successCallBack, errorCallBack, dispatch);
};
