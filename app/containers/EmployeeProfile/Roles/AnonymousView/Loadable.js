/**
 *
 * Asynchronously loads the component for CompanyView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
