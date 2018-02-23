/**
 *
 * Asynchronously loads the component for MultipleChoiceQuestionCreation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
