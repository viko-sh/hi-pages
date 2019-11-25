import { createReducer } from 'redux-act';
import defaultState, { LeadsState } from './state';
import { InvitedLeadList, AcceptedLeadList } from '../Lead/type';
import {
  getInvitedSuccess,
  getInvitedFailure,
  getAcceptedSuccess,
  getAcceptedFailure,
  updateInviteList,
  updateLeadFailure
} from './actions';

export function getInvitedSuccessReducer(
  state: LeadsState,
  payload: InvitedLeadList
) {
  return {
    ...state,
    invited: payload,
    isLoading: false,
    isLoaded: true
  };
}

export function getInvitedFailureReducer(state: LeadsState) {
  return {
    ...state,
    invited: [],
    isLoading: false,
    isLoaded: true,
    error: true
  };
}

export function getAcceptedSuccessReducer(
  state: LeadsState,
  payload: AcceptedLeadList
) {
  return {
    ...state,
    accepted: payload,
    isLoading: false,
    isLoaded: true,
    error: false
  };
}

export function getAcceptedFailureReducer(state: LeadsState) {
  return {
    ...state,
    isLoading: false,
    isLoaded: false,
    error: true
  };
}

export function updateInviteListReducer(state: LeadsState, id: number) {
  const invited = [...state.invited].filter(item => item.id !== id);
  return {
    ...state,
    invited,
    isLoading: false,
    isLoaded: false
  };
}

export function updateLeadFailureReducer(state: LeadsState) {
  return {
    ...state,
    isLoading: false,
    isLoaded: false,
    error: true
  };
}

export default createReducer(
  {
    [`${getInvitedSuccess}`]: getInvitedSuccessReducer,
    [`${getInvitedFailure}`]: getInvitedFailureReducer,
    [`${getAcceptedSuccess}`]: getAcceptedSuccessReducer,
    [`${getAcceptedFailure}`]: getAcceptedFailureReducer,
    [`${updateInviteList}`]: updateInviteListReducer,
    [`${updateLeadFailure}`]: updateLeadFailureReducer
  },
  defaultState
);
