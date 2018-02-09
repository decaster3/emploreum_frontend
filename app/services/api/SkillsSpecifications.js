import AxiosService from '../AxiosService';
import { BASEURL } from '../../global-constants';

export const getSpecificationsAPI = (successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/specialisation/profiles`, successCallBack, errorCallBack, dispatch);
};

export const getSkillsFromSpecificationAPI = (credentails, successCallBack, errorCallBack, dispatch) => {
  AxiosService.get(`${BASEURL}/specialisation/skills?profile=${credentails}`, successCallBack, errorCallBack, dispatch);
};
