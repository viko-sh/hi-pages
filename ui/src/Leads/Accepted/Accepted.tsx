import React, { Component } from 'react';
import { AcceptedLead, AcceptedJob } from '../Lead';
import { NoResults } from '../../shared/styles';
import axios from '../../shared/lib/api';
import { Link } from 'react-router-dom';

type AcceptedState = {
  loading: boolean;
  leads: AcceptedJob[];
};

export class Accepted extends Component<AcceptedState, {}> {
  state = {
    loading: false,
    leads: []
  };

  async componentDidMount() {
    try {
      const leads = await axios.get('/api/jobs/accepted');
      const { data } = leads;
      if (data && data.length) {
        this.setState({
          leads: data
        });
      }
    } catch (err) {}
  }

  render() {
    const { leads } = this.state;
    return (
      <div>
        {leads.length > 0 &&
          leads.map((lead, i) => (
            <AcceptedLead {...lead} key={`invited-lead-${i}`} />
          ))}
        {leads.length === 0 && (
          <NoResults id="no-results">
            Hi, you didn't accept any Leads yet, click <Link to="/">here</Link>{' '}
            to view whats availible
          </NoResults>
        )}
      </div>
    );
  }
}
