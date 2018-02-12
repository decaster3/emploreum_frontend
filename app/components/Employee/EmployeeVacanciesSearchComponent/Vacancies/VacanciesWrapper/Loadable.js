/**
 *
 * Asynchronously loads the component for VacanciesWrapper
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
