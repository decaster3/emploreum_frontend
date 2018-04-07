import PropTypes from 'prop-types';
import AnonymousRoutes from './AnonymousRoutes';
import EmployeeRoutes from './EmployeeRoutes';
import { ANONYMOUS, LOGGING_IN } from '../../UserSession/constants';

const RolesRoutes = (props) => {
  const { userState } = props;
  if (userState === ANONYMOUS || userState === LOGGING_IN) {
    return AnonymousRoutes;
  }
  return EmployeeRoutes;
};

RolesRoutes.propTypes = {
  userState: PropTypes.string,
  userRole: PropTypes.string,
  isUserCompleteRegistration: PropTypes.bool,
};

export default RolesRoutes;
