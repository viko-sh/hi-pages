import React from 'react';
import { Customer } from './components/Customer';
import { JobDetails } from './components/JobDetails';
import { LeadDescription } from './components/LeadDescription';
import { LeadActions } from './components/LeadActions';
import { LeadProps } from './type';
import { LeadWrapper } from './style';

export const InvitedLead = ({
  categoryName,
  contactName,
  description,
  id,
  postCode,
  price,
  suburbName,
  createdAt,
  onAccept,
  onDecline
}: LeadProps) => {
  return (
    <LeadWrapper>
      <Customer contactName={contactName} createdAt={createdAt} />
      <JobDetails
        id={id}
        suburbName={suburbName}
        postCode={postCode}
        categoryName={categoryName}
      />
      <LeadDescription description={description} />
      <LeadActions price={price} onAccept={onAccept} onDecline={onDecline} />
    </LeadWrapper>
  );
};
