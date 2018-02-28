/**
 *
 * Asynchronously loads the component for VacanciesSearch
 *
 */
import React from 'react';

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => <div>Loading</div>,
});
