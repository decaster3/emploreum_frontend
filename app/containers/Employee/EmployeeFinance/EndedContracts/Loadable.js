/**
 *
 * Asynchronously loads the component for EndedContracts
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
