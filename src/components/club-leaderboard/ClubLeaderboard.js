import React, { Component } from 'react';
import './ClubLeaderboard.scss';
import { ReduxEventsData } from '../redux-data';

const CLUB_NAMES = ['Underground Racing Club Season 2', 'Lunar Racing Club Season 2', 'MJC 2', 'Enterprise Legacy', 'SS2']

class ClubLeaderboard extends Component {
  state = {
    activeClub: 0,
  };

  render() {
    return (
      <ReduxEventsData>
        {(eventData) => {
          const relevantEvents = eventData && eventData.events && eventData.events.items.length ? eventData.events.items.filter(event => event.name && CLUB_NAMES.indexOf(event.name) >= 0) : [];
          console.log('relevent data', relevantEvents);
          return (
            <div className="club-leaderboard-container">
              <h2>Club Leaderboard</h2>
              {/* Club header that can select onr of the clubs and adjusts state when selected */}
              {/* Club content that displays the data of the selected index, for now just name and rating */}
            </div>
          )
        }}
      </ReduxEventsData>
      
    );
  } 
}

export default ClubLeaderboard;
