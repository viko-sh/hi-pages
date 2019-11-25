import { InvitedLeadList, AcceptedLeadList } from '../Lead/type';

export type LeadsState = {
  isLoaded: boolean;
  isLoading: boolean;
  invited: InvitedLeadList;
  accepted: AcceptedLeadList;
  error: boolean;
};

export default {
  isLoaded: false,
  isLoading: true,
  invited: [],
  accepted: [],
  error: false
} as LeadsState;
