import { createAction, props } from '@ngrx/store';
import { RegisterPayload, RegisterResponse, User } from './user.interface'

export enum UserActionTypes {
  Register = '[User] Register',
  RegisterSuccess = '[User] Register Success',
  RegisterFail = '[User] Register Fail',
}

const register = createAction(
  UserActionTypes.Register,
  props<{
    payload: RegisterPayload;
  }>()
);

const registerSuccess = createAction(
  UserActionTypes.RegisterSuccess,
  props<{
    response: User;
  }>()
);

const registerFail = createAction(
  UserActionTypes.RegisterFail,
  props<{
    error: any;
  }>()
);


export const UserActions = {
  register,
  registerSuccess,
  registerFail
}