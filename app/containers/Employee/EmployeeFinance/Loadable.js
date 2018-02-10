/**
 *
 * Asynchronously loads the component for EmployeeFinanceContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
