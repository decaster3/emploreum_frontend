/**
 *
 * Asynchronously loads the component for ProfileHeaderSocial
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
