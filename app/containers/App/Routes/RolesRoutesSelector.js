import PropTypes from 'prop-types';
import AnonymousRoutes from './AnonymousRoutes';
import EmployeeRoutes from './EmployeeRoutes';
import CompanyRoutes from './CompanyRoutes';
import NotRegistredEmployeeRoutes from './NotRegistredEmployeeRoutes';
import NotRegistredCompanyRoutes from './NotRegistredCompanyRoutes';
import { ANONYMOUS, LOGGING_IN } from '../../UserSession/constants';
import { COMPANY } from '../../Registration/constants';

const RolesRoutes = (props) => {
  const { userState, isUserCompleteRegistration, userRole } = props;
  if (userState === ANONYMOUS || userState === LOGGING_IN) {
    return AnonymousRoutes;
  }
  if (isUserCompleteRegistration) {
    if (userRole === COMPANY) {
      return CompanyRoutes;
    }
    return EmployeeRoutes;
  }
  if (userRole === COMPANY) {
    return NotRegistredCompanyRoutes;
  }
  return NotRegistredEmployeeRoutes;
};

RolesRoutes.propTypes = {
  userState: PropTypes.string,
  userRole: PropTypes.string,
  isUserCompleteRegistration: PropTypes.bool,
};

export default RolesRoutes;
