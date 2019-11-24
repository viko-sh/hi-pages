import React from 'react';
import { Customer } from './components/Customer';
import { JobDetails } from './components/JobDetails';
import { LeadDescription } from './components/LeadDescription';
import { LeadActions } from './components/LeadActions';
import { LeadProps } from './type';
import { LeadWrapper } from './style';

export const InvitedLead = ({
  categoryName,
  contactEmail,
  contactName,
  description,
  id,
  postCode,
  price,
  suburbName
}: LeadProps) => {
  return (
    <LeadWrapper>
      <Customer contactName={contactName} />
      <JobDetails
        id={id}
        suburbName={suburbName}
        postCode={postCode}
        categoryName={categoryName}
      />
      <LeadDescription description={description} />
      <LeadActions price={price} />
    </LeadWrapper>
  );
};
