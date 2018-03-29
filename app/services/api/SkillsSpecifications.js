import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getSpecificationsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/specialisation/profiles`, successCallBack, errorCallBack, dispatch);
};

export const getSkillsFromSpecificationAPI = (specification, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/specialisation/skills/${specification.id}`, successCallBack, errorCallBack, dispatch);
};

export const getSkillsSpecificationsFilterAPI = (specification, successCallBack, errorCallBack, dispatch) =>
  AxiosService.get(`${BASEURL}/specialisation/profileSkills`, successCallBack, errorCallBack, dispatch);

