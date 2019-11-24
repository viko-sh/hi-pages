import React from 'react';
import { LeadProps } from '../type';
import { JobDetailsWrapper } from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export const JobDetails = ({
  categoryName,
  id,
  postCode,
  suburbName
}: Partial<LeadProps>) => {
  return (
    <JobDetailsWrapper>
      <ul>
        <li>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {suburbName} {postCode}
        </li>
        <li>
          <FontAwesomeIcon icon={faBriefcase} />
          {categoryName}
        </li>
        <li>Job ID: {id}</li>
      </ul>
    </JobDetailsWrapper>
  );
};
