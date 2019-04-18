import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    botData: state.botData,
  }
}

class MainComponent extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <h1>Main</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(MainComponent);
