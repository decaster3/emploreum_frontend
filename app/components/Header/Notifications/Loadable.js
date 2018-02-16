/**
 *
 * Asynchronously loads the component for Notifications
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
