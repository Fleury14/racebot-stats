import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedRace extends Component {
  render() {
    return (
      <h1>Selected Race</h1>
    );
  }
}

export default connect(null, null)(SelectedRace);
