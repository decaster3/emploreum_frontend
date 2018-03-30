/**
 *
 * Asynchronously loads the component for MainInformation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
