import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import { State, adapter } from './user.reducer'

export const selectUserState = createFeatureSelector<State>('user');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectUserIds = createSelector(
  selectUserState,
  selectIds
);

export const selectUserEntities = createSelector(
  selectUserState,
  selectEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  selectAll
);
export const selectUserTotal = createSelector(
  selectUserState,
  selectTotal
);

export const selectUserPending = createSelector(
  selectUserState,
  (state) => state.pending
)

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
)