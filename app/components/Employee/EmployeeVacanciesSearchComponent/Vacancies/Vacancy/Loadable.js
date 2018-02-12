/**
 *
 * Asynchronously loads the component for Vacancy
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
