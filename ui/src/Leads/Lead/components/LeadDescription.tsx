import React from 'react';
import { LeadProps } from '../type';
import { Description } from '../style';
export const LeadDescription = ({ description }: Partial<LeadProps>) => {
  return (
    <Description>
      <p>{description}</p>
    </Description>
  );
};
