import React from 'react';
import { ActionButton, Button } from '../../../shared/styles';
import { ActionsWrapper, Price } from '../style';
import { LeadProps } from '../type';

export const LeadActions = ({ price }: Partial<LeadProps>) => {
  return (
    <ActionsWrapper>
      <ActionButton>Accept</ActionButton>
      <Button>Decline</Button>
      <Price>
        <span>${Number(price).toFixed(2)}</span> Lead Invitation
      </Price>
    </ActionsWrapper>
  );
};
