import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { searchRacer } from '../../helpers';
import './PlayerSearcher.scss';


class PlayerSearcher extends Component {
  state = {
    playerInput: '',
    notFound: false,
  }

  async onSubmitName() {
    const { playerInput } = this.state;
    const { navigation } = this.props;
    let result = await searchRacer(playerInput, navigation);
    if (result) {
      navigation.push(`/racer/${result}`)
    } else {
      this.setState({ notFound: true })
    }
  }

  render() {
    const { playerInput, notFound } = this.state;
    return (
      <div className="player-searcher-container p-5">
        <p>Input player name</p>
          <div className="d-flex">
            <Input className="mr-4" value={playerInput} onChange={e => this.setState({ playerInput: e.target.value })}/>
            <Button color="primary" onClick={() => this.onSubmitName()}>Submit</Button>
          </div>
          {notFound && <p>Racer not found. Search is case sensitive!</p>}
      </div>
    );
  }
}

export default PlayerSearcher;
