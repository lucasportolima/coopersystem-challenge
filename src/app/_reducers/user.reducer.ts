import { createReducer, on } from '@ngrx/store'

import * as UserActions from '../_actions/user.action';

const INITIAL_STATE = {
  user: {
    name: '',
    avatar_url: '',
    login: ''
  }
};

export const UserReducer = createReducer(
  INITIAL_STATE,
  on(UserActions.actionSetUser, (state, { payload }) => ({
    ...state,
    user: payload
  }))
)