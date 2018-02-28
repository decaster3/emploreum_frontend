import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getCompanyTestsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/company/tests`, successCallBack, errorCallBack, dispatch);
};

export const companyCreateTestAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { testName, specifications } = payload;
  const specs = [];
  let specification = {};
  specifications.toJS().forEach((element) => {
    specification.id = element.specification.id;
    specification.name = element.specification.name;
    specification.skills = element.items;
    specs.push(specification);
    specification = {};
  });
  AxiosService.post(`${BASEURL}/test/company/create`, { name: testName, specifications: specs }, successCallBack, errorCallBack, dispatch);
};

export const getEditTestQuestionAPI = (id, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/test/${id}/questions`, successCallBack, errorCallBack, dispatch);
};

export const getEditTestInfoAPI = (id, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/test/${id}`, successCallBack, errorCallBack, dispatch);
};

export const createCompanyInputQuestionAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { testId, values } = payload;
  const question = {};
  question.name = values.toJS().question;
  question.type = 'input';
  question.answers = [{
    name: values.toJS().answer,
    isTrue: true,
  }];
  AxiosService.post(`${BASEURL}/test/${testId}/question/create`, { question }, successCallBack, errorCallBack, dispatch);
};

export const createCompanyMultipleQuestionAPI = (payload, successCallBack, errorCallBack, dispatch) => {
  const { testId, values } = payload;
  const question = {};
  question.name = values.toJS().question;
  question.answers = [];
  question.type = 'multipleChoice';
  // :D
  Object.keys(values.toJS()).forEach((el) => {
    if (el.split('')[0] === 'f') {
      question.answers.push({
        name: values.toJS()[el],
        isTrue: false,
      });
    }
    if (el.split('')[0] === 't') {
      question.answers.push({
        name: values.toJS()[el],
        isTrue: true,
      });
    }
  });
  AxiosService.post(`${BASEURL}/test/${testId}/question/create`, { question }, successCallBack, errorCallBack, dispatch);
};
