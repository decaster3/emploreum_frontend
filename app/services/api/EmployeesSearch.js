import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getAllEmployeesAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/employee/all`, successCallBack, errorCallBack, dispatch);
  // setTimeout(() => {
  //   const mock = [{
  //     id: '3',
  //     name: 'Замалеев Ильгиз Айратович',
  //     profile: 'Web developer',
  //   }];
  //   successCallBack(mock);
  // }, 1000);
};
