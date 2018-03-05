/**
 *
 * Asynchronously loads the component for EmployeeEnrollState
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
