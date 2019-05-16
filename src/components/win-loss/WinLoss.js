import React, { Component } from 'react';
import { ParseWinLoss, parseRivalry } from '../../helpers';
import WinLossDisplay from './WinLossDisplay';
import RivalModal from './RivalModal';

class WinLoss extends Component {
  state = {
    parsedData: null,
    playerWinLoss: null,
    rivalry: null,
  }

  componentDidMount() {
    const { data, selectedPlayer } = this.props;
    const dataResult = ParseWinLoss(data.items || data);
    if (selectedPlayer) {
      this.setState({ playerWinLoss: dataResult.find(racer => racer.name.toLowerCase() === selectedPlayer.toLowerCase()) });
    }
  }

  getRivalry(player1, player2) {
    const rivalData = parseRivalry(this.props.data, player1, player2);
    this.setState({ rivalry: {player: player1, rival: player2, raceData: rivalData } });
  }

  clearRivarly() {
    this.setState({ rivalry: null });
  }

  render() {
    const { selectedPlayer } = this.props;
    const { playerWinLoss, rivalry } = this.state;
    return (
      <div>
        {rivalry && <RivalModal
          player={rivalry.player}
          rival={rivalry.rival}
          raceData={rivalry.raceData}
          close={() => this.clearRivarly()}
          />}
        {!playerWinLoss && <p>There is no data to display</p>}
        {playerWinLoss && (
          <div>
            {selectedPlayer && <WinLossDisplay playerData={playerWinLoss} sendRivalInfo={(player1, player2) => this.getRivalry(player1, player2)} />}
          </div>
        )}
      </div>
    );
  }
}

export default WinLoss;
