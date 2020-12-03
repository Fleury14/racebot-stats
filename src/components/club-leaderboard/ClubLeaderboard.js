import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './ClubLeaderboard.scss';
import { ReduxEventsData } from '../redux-data';
import ClubHeader from './ClubHeader';

const CLUB_NAMES = ['Underground Racing Club Season 2', 'Lunar Racing Club Season 2', 'MJC 2', 'Enterprise Legacy', 'SS2']
const ABBREVIATIONS = ['URC', 'LRC', 'MJC', 'EL', 'SS'];

class ClubLeaderboard extends Component {
  state = {
    activeClub: 0,
  };

  switchClub(abbrev) {
    const newIndex = ABBREVIATIONS.indexOf(abbrev);
    this.setState({ activeClub: newIndex });
  }

  componentDidMount() {
    const today = new Date();
    const currentDay = today.getDay();
    switch (currentDay) {
      case 2:
        this.setState({ activeClub: 0 });
        break;
      case 3:
        this.setState({ activeClub: 2 });
        break;
      case 4:
        this.setState({ activeClub: 1 });
        break;
      case 6:
        this.setState({ activeClub: 3 });
        break;
      case 0:
        this.setState({ activeClub: 4 });
        break;
      default:
        break;
    }
  }

  renderLeaderboard(clubData) {
    if(clubData === null) return;
    const { entrants } = clubData;
    const sortedEntrants = entrants.sort((entrantOne, entrantTwo) => entrantTwo.points - entrantOne.points);
    return sortedEntrants.map((entrant, index) => {
      
      return index < 5 ? (
        <div key={index}>
          <span>{entrant.name}</span>
          <span>{entrant.points}</span>
        </div>
      ) : null;
    }) 
  }

  render() {
    const { activeClub } = this.state;
    return (
      <ReduxEventsData>
        {(eventData) => {
          const relevantEvents = eventData && eventData.events && eventData.events.items.length ? eventData.events.items.filter(event => event.name && CLUB_NAMES.indexOf(event.name) >= 0) : [];
          let activeEventData = null;
          if (relevantEvents.length) {
            activeEventData = relevantEvents.find(event => event.name === CLUB_NAMES[activeClub]);
          }

          return (
            <div className="club-leaderboard-container">
              <h2>Club Leaderboard</h2>
              {/* Club header that can select one of the clubs and adjusts state when selected */}
              <ClubHeader
                abbreviations={ABBREVIATIONS}
                onClick={abbrev => this.switchClub(abbrev)}
              />
              {/* Club content that displays the data of the selected index, for now just name and rating */}
              {this.renderLeaderboard(activeEventData)}
            </div>
          )
        }}
      </ReduxEventsData>
      
    );
  } 
}

export default ClubLeaderboard;
