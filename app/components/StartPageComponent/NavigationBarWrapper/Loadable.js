/**
 *
 * Asynchronously loads the component for ProfileHeaderMain
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
