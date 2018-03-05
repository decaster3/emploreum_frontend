/**
 *
 * Asynchronously loads the component for EnrollVacancy
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
