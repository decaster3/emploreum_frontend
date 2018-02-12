/**
 *
 * Asynchronously loads the component for VacanciesSearch
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
