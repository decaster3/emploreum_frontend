/**
 *
 * Asynchronously loads the component for SkillsWrapper
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
