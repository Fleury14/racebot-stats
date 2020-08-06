import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (props) => {
  return (
    <div className="navbar-container open-sans">
      <Link to={'/'}>
        <h3>RACEBOT STATS</h3>
      </Link>
      <p>A stats page for the Discord Racebot built by DarkPaladin</p>
      <div className="sub-nav">
        <ul>
          <Link to={'/race-directory'}>
            <li>Race Directory</li>
          </Link>
          <Link to={'/player-directory'}>
            <li>Player Directory</li>
          </Link>
          <Link to={'/flag-stats'}>
            <li>Flag Stats</li>
          </Link>
          <Link to={'/wagers'}>
            <li>Wagers</li>
          </Link>
          <Link to={'/featured'}>
            <li>Featured Racers</li>
          </Link>
          <Link to={'/events'}>
            <li>Events</li>
          </Link>
          <Link to={'/htt3z'}>
            <li>HTT3Z</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;