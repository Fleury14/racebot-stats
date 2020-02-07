import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Navbar } from '..';
import FlagStatsv3 from './FlagStatsv3';
import FlagStatsv4 from './FlagStatsv4';
import './FlagStats.scss';



class FlagStats extends Component {
  state = {
    v4: true,
  }
  render() {
    const { v4 } = this.state;   
    return (
      <div>
        <Navbar />
        <div className="d-flex justify-content-center pt-5 flag-stats-button-row">
          <Button active={v4} onClick={() => this.setState({ v4: true })}>v4</Button>
          <Button active={!v4} onClick={() => this.setState({ v4: false })}>v3</Button>
        </div>
        {v4 ? <FlagStatsv4 /> : <FlagStatsv3 />}
      </div>
    );
  }
}

export default FlagStats;
