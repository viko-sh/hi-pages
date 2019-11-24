import React, { Component } from 'react';
import { AcceptedLead } from '../Lead';

import axios from 'axios';

export class Accepted extends Component {
  state = {
    loading: false,
    leads: []
  };

  async componentDidMount() {
    const res = await axios.get('http://localhost:9000/api/jobs/accepted');
    this.setState({
      leads: res.data
    });
  }

  render() {
    const { leads } = this.state;
    return (
      <div>
        {leads.length > 0 &&
          leads.map((lead, i) => (
            <AcceptedLead {...lead} key={`invited-lead-${i}`} />
          ))}
      </div>
    );
  }
}
