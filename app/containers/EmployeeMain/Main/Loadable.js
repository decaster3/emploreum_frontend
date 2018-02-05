/**
 *
 * Asynchronously loads the component for EmployeeMain
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
