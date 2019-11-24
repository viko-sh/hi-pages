import React, { Component } from 'react';
import { InvitedLead, InvitedJob } from '../Lead';
import axios from '../../shared/lib/api';
import {
  NoResults,
  LeadsContainer,
  Loader,
  ErrorMessage
} from '../../shared/styles';

type InvitedState = {
  loading: boolean;
  leads: InvitedJob[];
};

export class Invited extends Component<InvitedState, {}> {
  state = {
    loading: false,
    error: false,
    leads: []
  };

  async componentDidMount() {
    try {
      this.setState({
        loading: true
      });
      const result = await axios.get('/api/jobs/invited');
      const { data } = result;
      if (data && data.length) {
        this.setState({
          leads: data,
          loading: false
        });
      }
    } catch (err) {
      this.setState({
        loading: false,
        error: true
      });
    }
  }

  acceptLead = (lead: InvitedJob) => async () => {
    // show the loader
    this.setState({
      loading: true
    });
    const { id } = lead;

    // update the server
    try {
      await axios.post(`/api/jobs/accept-job/${id}`);
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      });
    }

    // we need to update the list
    const leads = [...this.state.leads];
    const filtered = leads.filter((l: InvitedJob) => l.id !== id);

    this.setState({
      loading: false,
      leads: filtered
    });
  };

  declineLead = (lead: InvitedJob) => async () => {
    // show the loader
    this.setState({
      loading: true
    });
    const { id } = lead;

    try {
      // update the server
      await axios.post(`/api/jobs/decline-job/${id}`);
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      });
    }

    const leads = [...this.state.leads];
    const filtered = leads.filter((l: InvitedJob) => l.id !== id);

    this.setState({
      loading: false,
      leads: filtered
    });
  };

  render() {
    const { leads, loading, error } = this.state;
    return (
      <LeadsContainer>
        {error && (
          <ErrorMessage>
            Opp... Something is wrong, and we are on it.
          </ErrorMessage>
        )}
        {loading && <Loader />}
        {!error &&
          leads.length > 0 &&
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
