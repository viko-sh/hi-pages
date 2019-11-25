import React, { Component } from 'react';
import { AcceptedLead, AcceptedLeadList } from '../Lead';
import { getAccepted } from '../state';
import {
  NoResults,
  LeadsContainer,
  ErrorMessage,
  Loader
} from '../../shared/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

type AcceptedProps = {
  leads: AcceptedLeadList;
  isLoading: boolean;
  isLoaded: boolean;
  error: boolean;
  getAccepted: () => void;
};

export class AcceptedInner extends Component<AcceptedProps> {
  componentDidMount() {
    const { getAccepted } = this.props;
    getAccepted();
  }

  render() {
    const { leads, isLoading, error } = this.props;
    return (
      <LeadsContainer>
        {error && (
          <ErrorMessage>
            Opp... Something is wrong, and we are on it.
          </ErrorMessage>
        )}
        {isLoading && <Loader />}
        {!error &&
          leads.length > 0 &&
          leads.map((lead, i) => (
            <AcceptedLead {...lead} key={`invited-lead-${i}`} />
          ))}
        {leads.length === 0 && !error && (
          <NoResults id="no-results">
            Hi, you didn't accept any Leads yet, click <Link to="/">here</Link>{' '}
            to view whats availible
          </NoResults>
        )}
      </LeadsContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  leads: state.leads.accepted,
  error: state.leads.error,
  isLoading: state.leads.isLoading,
  isLoaded: state.leads.isLoaded
});

const mapDispatchToProps = {
  getAccepted
};

export const Accepted = connect(
  mapStateToProps,
  mapDispatchToProps
)(AcceptedInner);
