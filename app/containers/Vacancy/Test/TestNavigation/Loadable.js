/**
 *
 * Asynchronously loads the component for TestNavigation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
