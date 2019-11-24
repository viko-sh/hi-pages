import React, { Component } from 'react';
import { InvitedLead } from '../Lead';
import axios from 'axios';

type InvitedState = {
  loading: boolean;
  leads: [];
};

export class Invited extends Component<InvitedState, any> {
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

  async acceptLead(id: number) {}

  async declineLead(id: number) {}

  render() {
    const { leads } = this.state;
    return (
      <div>
        {leads.length > 0 &&
          leads.map((lead, i) => (
            <InvitedLead {...lead} key={`invited-lead-${i}`} />
          ))}
      </div>
    );
  }
}
