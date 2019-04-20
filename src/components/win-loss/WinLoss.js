import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { ParseWinLoss } from '../../helpers';
import WinLossDisplay from './WinLossDisplay';

class WinLoss extends Component {
  state = {
    parsedData: null,
    playerWinLoss: null,
  }

  componentDidMount() {
    const { data, selectedPlayer } = this.props;
    const dataResult = ParseWinLoss(data.items);
    this.setState({ playerWinLoss: dataResult.find(racer => racer.name === selectedPlayer) });
  }

  render() {
    // console.log('props', this.props);
    const { selectedPlayer } = this.props;
    const { playerWinLoss } = this.state;
    return (
      <div>
        <h1>Win loss</h1>
        {!playerWinLoss && <p>There is no data to display</p>}
        {playerWinLoss && (
          <div>
            {selectedPlayer && <WinLossDisplay playerData={playerWinLoss} />}
          </div>
        )}
      </div>
    );
  }
}

export default WinLoss;
