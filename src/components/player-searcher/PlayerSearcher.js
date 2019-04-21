import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import './PlayerSearcher.scss';



class PlayerSearcher extends Component {
  state = {
    playerInput: ''
  }

  onSubmitName() {
    const { playerInput } = this.state;
    const { navigation } = this.props;
    navigation.push(`/racer/${playerInput}`);
  }

  render() {
    const { playerInput } = this.state;
    return (
      <div className="player-searcher-container p-5">
        <p>Input player name</p>
          <div className="d-flex">
            <Input className="mr-4" value={playerInput} onChange={e => this.setState({ playerInput: e.target.value })}/>
            <Button color="primary" onClick={() => this.onSubmitName()}>Submit</Button>
          </div>
      </div>
    );
  }
}

export default PlayerSearcher;