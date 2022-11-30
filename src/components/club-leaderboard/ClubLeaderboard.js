import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ClubLeaderboard.scss';
import { ReduxEventsData } from '../redux-data';
import ClubHeader from './ClubHeader';

const CLUB_NAMES = ['Spoil Sports S1', 'PPL2', "Hero's Journey", 'Enterprise Legacy', 'SS3']
const ABBREVIATIONS = ['SpS', 'PPL2', 'HJ', 'EL', 'SS'];

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
      case 1:
      case 2:
        this.setState({ activeClub: 0 });
        break;
      case 3:
        this.setState({ activeClub: 3 });
        break;
      case 4:
        this.setState({ activeClub: 1 });
        break;
      case 5:
      case 6:
        this.setState({ activeClub: 2 });
        break;
      case 0:
        this.setState({ activeClub: 4 });
        break;
      default:
        break;
    }
  }

  renderLeaderboard(clubData) {
    const NUM_TO_DISPLAY = 10;
    if(clubData === null) return;
    const { entrants } = clubData;
    const sortedEntrants = entrants.sort((entrantOne, entrantTwo) => entrantTwo.points - entrantOne.points);
    return sortedEntrants.map((entrant, index) => {
      
      return index < NUM_TO_DISPLAY ? (
        <div key={index} className={`d-flex justify-content-between club-leaderboard-bottom`}>
          <span>{index + 1}. <Link to={`/racer/${entrant.id}`}>{entrant.name}</Link></span>
          <span className="club-leaderboard-points">{entrant.points}</span>
        </div>
      ) : null;
    }) 
  }

  render() {
    const { activeClub } = this.state;
    return (
      <ReduxEventsData>
        {(eventData) => {
          const relevantEvents = eventData && eventData.events && eventData.events.items && eventData.events.items.length ? eventData.events.items.filter(event => event.name && CLUB_NAMES.indexOf(event.name) >= 0) : [];
          let activeEventData = null;
          if (relevantEvents.length) {
            activeEventData = relevantEvents.find(event => event.name === CLUB_NAMES[activeClub]);
          }

          return (
            <div className="club-leaderboard-container">
              <h2>Club Leaderboard</h2>
              {/* Club header that can select one of the clubs and adjusts state when selected */}
              <ClubHeader
                activeClub={activeClub}
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
