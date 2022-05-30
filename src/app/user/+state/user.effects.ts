import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../user.service';
import { UserActions } from './user.action';

@Injectable()
export class UserEffects {
  register$ = createEffect(
    () => this.actions$.pipe(
      ofType(UserActions.register),
      switchMap(
        action => this.userService.register(action.payload).pipe(
          map(res => UserActions.registerSuccess({ response: res.user })),
          catchError(err => of(UserActions.registerFail({ error: err })))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }
}