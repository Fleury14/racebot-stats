import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { ParseWinLoss } from '../../helpers';

class WinLoss extends Component {
  state = {
    parsedData: null,
    playerInput: '',
    foundNames: null,
  }

  componentDidMount() {
    const { data } = this.props;
    const dataResult = ParseWinLoss(data.items);
    this.setState({ parsedData: dataResult });
  }

  onSubmitName() {
    const { playerInput, parsedData } = this.state;
    const foundNames = parsedData.find(race => race.name.toLowerCase() === playerInput.toLowerCase());
    console.log('found', foundNames);
  }

  render() {
    // console.log('props', this.props);
    console.log('state', this.state);
    const { parsedData, playerInput } = this.state;
    return (
      <div>
        <h1>Win loss</h1>
        {!parsedData && <p>There is no data to display</p>}
        {parsedData && (
          <div>
            <p>{parsedData.length} players on record.</p>
            <p>Input player name</p>
            <div className="d-flex">
              <Input className="mr-4" value={playerInput} onChange={e => this.setState({ playerInput: e.target.value })}/>
              <Button color="primary" onClick={() => this.onSubmitName()}>Submit</Button>
            </div>
            
          </div>
        )}
      </div>
    );
  }
}

export default WinLoss;
