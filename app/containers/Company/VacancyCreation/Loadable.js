/**
 *
 * Asynchronously loads the component for VacancyCreation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
