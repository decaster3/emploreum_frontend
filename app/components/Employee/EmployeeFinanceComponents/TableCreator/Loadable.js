/**
 *
 * Asynchronously loads the component for TableCreator
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
