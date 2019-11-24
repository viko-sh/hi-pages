import React from 'react';
import { ActionButton, Button } from '../../../shared/styles';
import { ActionsWrapper, Price } from '../style';
import { LeadProps } from '../type';

export const LeadActions = ({
  price,
  onAccept,
  onDecline
}: Partial<LeadProps>) => {
  return (
    <ActionsWrapper>
      <ActionButton onClick={onAccept}>Accept</ActionButton>
      <Button onClick={onDecline}>Decline</Button>
      <Price>
        <span>${Number(price).toFixed(2)}</span> Lead Invitation
      </Price>
    </ActionsWrapper>
  );
};
