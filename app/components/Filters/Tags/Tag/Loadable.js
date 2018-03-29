/**
 *
 * Asynchronously loads the component for ErolledEmployee
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
