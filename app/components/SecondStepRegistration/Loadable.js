/**
 *
 * Asynchronously loads the component for SecondStepEmplRegistration
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
