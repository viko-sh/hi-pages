import React, { Component } from 'react';
import { InvitedLead, InvitedJob } from '../Lead';
import axios from '../../shared/lib/api';
import { NoResults, LeadsContainer } from '../../shared/styles';

type InvitedState = {
  loading: boolean;
  leads: InvitedJob[];
};

export class Invited extends Component<InvitedState, {}> {
  state = {
    loading: false,
    leads: []
  };

  async componentDidMount() {
    try {
      const leads = await axios.get('/api/jobs/invited');
      const { data } = leads;
      if (data && data.length) {
        this.setState({
          leads: data
        });
      }
    } catch (err) {}
  }

  acceptLead = (lead: InvitedJob) => async () => {
    const { id } = lead;
    await axios.post(`/api/jobs/accept-job/${id}`);
  };

  declineLead = (lead: InvitedJob) => async () => {
    const { id } = lead;
    await axios.post(`/api/jobs/decline-job/${id}`);
  };

  render() {
    const { leads } = this.state;
    return (
      <LeadsContainer>
        {leads.length > 0 &&
          leads.map((lead, i) => (
            <InvitedLead
              {...lead}
              key={`invited-lead-${i}`}
              onAccept={this.acceptLead(lead)}
              onDecline={this.declineLead(lead)}
            />
          ))}
        {leads.length === 0 && (
          <NoResults id="no-results">
            Hi, we don't have any jobs for you yet. We will notify you once we
            have something.
          </NoResults>
        )}
      </LeadsContainer>
    );
  }
}
