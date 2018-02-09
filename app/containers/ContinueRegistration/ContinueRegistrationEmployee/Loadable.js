/**
 *
 * Asynchronously loads the component for ContinueRegistrationEmployee
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
