import React, { Component } from 'react';
import { Navbar } from '..';
import FlagStatsv3 from './FlagStatsv3';
import './FlagStats.scss';



class FlagStats extends Component {
  state = {
    v4: true,
  }
  render() {    
    return (
      <div>
        <Navbar />
        <FlagStatsv3 />      
      </div>
    );
  }
}

export default FlagStats;
