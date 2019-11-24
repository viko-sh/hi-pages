import React from 'react';
import { LeadProps } from '../type';
import { CustomerInfoWrapper } from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const CustomerInfo = ({
  contactPhone,
  contactEmail
}: Partial<LeadProps>) => {
  return (
    <CustomerInfoWrapper>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhoneAlt} />
          {contactPhone}
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          {contactEmail}
        </li>
      </ul>
    </CustomerInfoWrapper>
  );
};
