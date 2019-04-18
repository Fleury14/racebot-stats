import React, { Component } from 'react';
import { ParseWinLoss } from '../../helpers';

class WinLoss extends Component {
  state = {
    parsedData: null,
  }

  componentDidMount() {
    const { data } = this.props;
    const dataResult = ParseWinLoss(data.items);
    this.setState({ parsedData: dataResult });
  }

  render() {
    // console.log('props', this.props);
    console.log('state', this.state);
    return (
      <div>
        <h1>Win loss</h1>
      </div>
    );
  }
}

export default WinLoss;
