import React from 'react';
import moment from 'moment';
import { LeadProps } from '../type';
import { CustomeWrapper, CustomerIcon, CustomerDetails } from '../style';

export const Customer = ({ contactName, createdAt }: Partial<LeadProps>) => {
  return (
    <CustomeWrapper>
      <CustomerIcon>
        {contactName && <span>{contactName[0]}</span>}
      </CustomerIcon>
      <CustomerDetails>
        {contactName}
        <br />
        <span>{moment(createdAt).format('MMMM D @ h:mm a')}</span>
      </CustomerDetails>
    </CustomeWrapper>
  );
};
