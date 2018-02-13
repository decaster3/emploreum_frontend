/**
 *
 * Asynchronously loads the component for ProfileLeft
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
