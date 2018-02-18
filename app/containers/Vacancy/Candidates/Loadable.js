/**
 *
 * Asynchronously loads the component for Candidates
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
