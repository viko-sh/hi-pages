export type LeadProps = {
  categoryName: string;
  contactEmail?: string;
  contactPhone?: string | number;
  contactName?: string;
  description: string;
  id: number;
  postCode: number | string;
  price: number;
  suburbName: string;
  createdAt?: string;
  onAccept: () => {};
  onDecline: () => {};
};

export type InvitedJob = {
  id: number;
  contactName: string;
  price: number;
  description: string;
  categoryName: string;
  suburbName: string;
  postCode: string;
  createdAt: string;
};

export type AcceptedJob = {
  contactEmail: string;
  contactPhone: string;
} & InvitedJob;

export type InvitedLeadList = InvitedJob[];
export type AcceptedLeadList = AcceptedJob[];
