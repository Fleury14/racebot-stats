import React from 'react';
import { Link } from 'react-router-dom';
import { ReduxRacerData } from '../redux-data'
import { GetCookieLeaders } from '../../helpers';
import './CookieLeaderboard.scss';

const CookieLeaderboard = (props) => {
  return (
    <ReduxRacerData>
      {(response) => {
        const userData = response && response.racerData && response.racerData.items ? GetCookieLeaders(response.racerData.items) : null;
        return userData ? (
        <div className="cookie-leaderboard-container">
          <h1 className="text-center">COOKIE LEADERBOARD</h1>
          <ol>
            {userData.map(user => {
              return (
                <li key={user.id}>
                  <span className="ml-3 mr-3 cookie-number">{user.cookies}</span>
                  <Link to={`racer/${user.name}`}>
                    <span className="cookie-name">{user.name}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      ) : null;
      }}
    </ReduxRacerData>
  );
}


export default CookieLeaderboard;
