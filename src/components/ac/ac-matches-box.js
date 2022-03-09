import React, { Component } from 'react';
import './ac.scss';

class ACMatchBox extends Component {
  state = {
    expanded: false
  }

  toggleExpand() {
    this.setState(state => {
      return {
        expanded: !state.expanded
      }
    });
  }

  render() {
    const { matches } = this.props;
    return (
      <div className='ac-match-box'>
        <div className='ac-match-title d-flex justify-content-between align-items-center'>
          <p>Matches</p>
          <button onClick={() => this.toggleExpand()}>{this.state.expanded ? '-' : '+'}</button>
          </div>
        { matches ? matches.map(match => {
          return (
            <div key={`${match.racer1}-${match.racer2}`} className={`d-flex justify-content-between ${!this.state.expanded ? 'ac-closed' : ''}`}>
              <p className={`ac-match-box-row${match.winner === 1 ? ' ac-match-win' : ''}`}>{match.racer1} - {match.time1}</p>
              <p className={`ac-match-box-row${match.winner === 2 ? ' ac-match-win' : ''}`}>{match.racer2} - {match.time2}</p>
            </div>
          )
        }) : <p>No matches yet.</p>}
      </div>
    );
  }
}

export default ACMatchBox;
