import { createAction, props } from '@ngrx/store';

import * as ActionsTypes from '../_helper/actionsTypes';

export const actionSetUser = createAction(
  ActionsTypes.SET_USER,
  props<{ payload: any }>()
)