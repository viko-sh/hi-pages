import React, { Component } from 'react';
import { InvitedLead, InvitedJob } from '../Lead';
import axios from 'axios';

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
    const res = await axios.get('http://localhost:9000/api/jobs/invited');
    this.setState({
      leads: res.data
    });
  }

  acceptLead = (lead: InvitedJob) => async () => {
    const { id } = lead;
    await axios.post(`http://localhost:9000/api/jobs/accept-job/${id}`);
  };

  declineLead = (lead: InvitedJob) => async () => {
    const { id } = lead;
    await axios.post(`http://localhost:9000/api/jobs/decline-job/${id}`);
  };

  render() {
    const { leads } = this.state;
    return (
      <div>
        {leads.length > 0 &&
          leads.map((lead, i) => (
            <InvitedLead
              {...lead}
              key={`invited-lead-${i}`}
              onAccept={this.acceptLead(lead)}
              onDecline={this.declineLead(lead)}
            />
          ))}
      </div>
    );
  }
}
