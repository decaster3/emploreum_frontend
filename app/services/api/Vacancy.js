import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const submitVacancyAPI = (specifications, other, successCallBack, errorCallBack, dispatch) => {
  const arr = [];
  const { payment, duration } = other.toJS();
  specifications.toJS().forEach((element) => {
    const specification = element.specification;
    const obj = {};
    obj[specification] = element.specification;
    arr.push(obj);
  });
  console.log({ arr, payment, duration });
  // AxiosService.post(`${BASEURL}/vacancy/create`, { arr, payment, duration }, successCallBack, errorCallBack, dispatch);
};

export const getOpenVacancys = (successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/vacancy/get`, successCallBack, errorCallBack, dispatch);
