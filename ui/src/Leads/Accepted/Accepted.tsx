import React, { Component } from 'react';
import axios from 'axios';

export class Accepted extends Component {
  async componentDidMount() {
    const res = await axios.get('http://localhost:9000/api/jobs/accepted');
    console.log(res.data);
  }

  render() {
    return <div>Accepted</div>;
  }
}
