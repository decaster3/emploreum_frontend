/**
 *
 * Asynchronously loads the component for TestCreationMain
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
