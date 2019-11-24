import React from 'react';
import { LeadProps } from '../type';
import { CustomeWrapper, CustomerIcon, CustomerDetails } from '../style';

export const Customer = ({ contactName }: Partial<LeadProps>) => {
  return (
    <CustomeWrapper>
      <CustomerIcon>
        {contactName && <span>{contactName[0]}</span>}
      </CustomerIcon>
      <CustomerDetails>
        {contactName}
        <br />
        <span>January 4 @ 2:37 pm</span>
      </CustomerDetails>
    </CustomeWrapper>
  );
};
