import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from '..'
import './FlagStats.scss';

const FlagStats = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Flag stats</h1>
    </div>
  );
}

export default FlagStats;
