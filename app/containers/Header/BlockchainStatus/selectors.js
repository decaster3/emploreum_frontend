import { createSelector } from 'reselect';

/**
 * Direct selector to the blockchainStatus state domain
 */
const selectBlockchainStatusDomain = (state) => state.get('blockchainStatus');

export const selectAsyncBlockchainMessage = createSelector(
  selectBlockchainStatusDomain,
  (asycActions) => {
    let message = '';
    asycActions.get('asyncActions').toJS().forEach((el) => {
      message = `${message} ${el}`;
    });
    return message;
  }
);

export const selectAsyncBlockchainActionsCount = createSelector(
  selectBlockchainStatusDomain,
  (asyncActionsCount) => asyncActionsCount.get('asyncActions').toJS().length
);
