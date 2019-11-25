import React, { Component } from 'react';
import { InvitedLeadList, InvitedJob, InvitedLead } from '../Lead';
import { connect } from 'react-redux';
import { getInvited, acceptLead, declineLead } from '../state';
import {
  NoResults,
  LeadsContainer,
  Loader,
  ErrorMessage
} from '../../shared/styles';

type InvitedProps = {
  leads: InvitedLeadList;
  isLoading: boolean;
  isLoaded: boolean;
  error: boolean;
  getInvited: () => void;
  acceptLead: (id: number) => void;
  declineLead: (id: number) => void;
};

export class InvitedInner extends Component<InvitedProps> {
  componentDidMount() {
    const { getInvited } = this.props;
    getInvited();
  }

  acceptLead = (lead: InvitedJob) => async () => {
    const { acceptLead } = this.props;
    acceptLead(lead.id);
  };

  declineLead = (lead: InvitedJob) => async () => {
    const { declineLead } = this.props;
    declineLead(lead.id);
  };

  render() {
    const { leads, error, isLoading } = this.props;
    return (
      <LeadsContainer>
        {error && (
          <ErrorMessage>
            Opp... Something is wrong, and we are on it.
          </ErrorMessage>
        )}
        {isLoading && <Loader />}
        {leads.length > 0 &&
          leads.map((lead, i) => (
            <InvitedLead
              {...lead}
              key={`invited-lead-${i}`}
              onAccept={this.acceptLead(lead)}
              onDecline={this.declineLead(lead)}
            />
          ))}
        {leads.length === 0 && !error && (
          <NoResults id="no-results">
            Hi, we don't have any jobs for you yet. We will notify you once we
            have something.
          </NoResults>
        )}
      </LeadsContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  leads: state.leads.invited,
  error: state.leads.error,
  isLoading: state.leads.isLoading,
  isLoaded: state.leads.isLoaded
});

const mapDispatchToProps = {
  getInvited,
  acceptLead,
  declineLead
};

export const Invited = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitedInner);
