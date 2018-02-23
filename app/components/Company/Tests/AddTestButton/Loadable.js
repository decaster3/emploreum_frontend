/**
 *
 * Asynchronously loads the component for AddTestButton
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
