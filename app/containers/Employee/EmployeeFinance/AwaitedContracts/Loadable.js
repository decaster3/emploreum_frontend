/**
 *
 * Asynchronously loads the component for AwaitedContracts
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
