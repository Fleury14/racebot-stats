import React, { Component } from 'react';
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
    if (selectedPlayer) {
      this.setState({ playerWinLoss: dataResult.find(racer => racer.name.toLowerCase() === selectedPlayer.toLowerCase()) });
    }
  }

  render() {
    const { selectedPlayer } = this.props;
    const { playerWinLoss } = this.state;
    return (
      <div>
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
