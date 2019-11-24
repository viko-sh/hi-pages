import React from 'react';
import { ActionButton, Button } from '../../../shared/styles';
import { ActionsWrapper, Price } from '../style';
import { LeadProps } from '../type';

export const LeadActions = ({ price }: Partial<LeadProps>) => {
  console.log(price);
  return (
    <ActionsWrapper>
      <ActionButton>Accept</ActionButton>
      <Button>Decline</Button>
      <Price>${Number(price).toFixed(2)} Lead Invitation</Price>
    </ActionsWrapper>
  );
};
