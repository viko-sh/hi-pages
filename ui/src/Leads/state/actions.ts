import { createAction } from 'redux-act';
import { InvitedLeadList, AcceptedLeadList } from '../Lead/type';
/**
 * Some short document about what this action is about
 */
export const getInvited = createAction('LEADS_GET_INVITED');

export const getInvitedSuccess = createAction(
  'LEADS_GET_INVITED_SUCCESS',
  (data: InvitedLeadList) => data
);

export const getInvitedFailure = createAction(
  'LEADS_GET_INVITED_FAILURE',
  (error: any) => error
);

export const getAccepted = createAction('LEADS_GET_ACCEPTED');

export const getAcceptedSuccess = createAction(
  'LEADS_GET_ACCEPTED_SUCCESS',
  (data: AcceptedLeadList) => data
);

export const getAcceptedFailure = createAction(
  'LEADS_GET_ACCEPTED_FAILURE',
  (error: any) => error
);

export const updateLeadFailure = createAction(
  'UPDATE_LEAD_FAILURE',
  (error: any) => error
);

export const acceptLead = createAction(
  'LEADS_ACCEPT_LEAD',
  (lead: number) => lead
);

export const updateInviteList = createAction(
  'LEADS_ACCEPT_REFRESH',
  (lead: number) => lead
);

export const declineLead = createAction('LEADS_DECLINE_LEAD');
