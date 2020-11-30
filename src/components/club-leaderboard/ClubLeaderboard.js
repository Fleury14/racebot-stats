import React from 'react';
import './ClubLeaderboard.scss';
import { ReduxEventsData } from '../redux-data';

const CLUB_NAMES = ['Underground Racing Club Season 2', 'Lunar Racing Club Season 2', 'MJC 2', 'Enterprise Legacy', 'SS2']

const ClubLeaderboard = (props) => {
  return (
    <ReduxEventsData>
      {(eventData) => {
        const relevantEvents = eventData && eventData.events && eventData.events.items.length ? eventData.events.items.filter(event => event.name && CLUB_NAMES.indexOf(event.name) >= 0) : [];
        console.log('relevent data', relevantEvents);
        return (
          <div className="club-leaderboard-container">
            <h2>Club Leaderboard</h2>
          </div>
        )
      }}
    </ReduxEventsData>
    
  );
}

export default ClubLeaderboard;
