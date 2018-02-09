/**
 *
 * Asynchronously loads the component for CompanyProfileContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
