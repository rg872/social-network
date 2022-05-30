import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.action'
import { User } from './user.interface';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export interface State extends EntityState<User> {
  selectedUserId: number | null;
  loggedInUserId: number | null;
  error: any | null;
  pending: boolean;
}

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
  loggedInUserId: null,
  error: null,
  pending: false,
})

export const userReducer = createReducer(
  initialState,
  on(UserActions.register, (state) => {
    return { ...state, error: null, pending: true }
  }),
  on(UserActions.registerSuccess, (state, { response }) => {
    return adapter.addOne(response, { ...state, loggedInUserId: response.id, pending: false });
  }),
  on(UserActions.registerFail, (state, { error }) => {
    return { ...state, error: error, pending: false }
  }),
)

