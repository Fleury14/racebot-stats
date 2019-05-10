import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (props) => {
  return (
    <div className="navbar-container open-sans">
      <h3>RACEBOT STATS</h3>
      <p>A stats page for the Discord Racebot built by Supremacy</p>
      <div className="sub-nav">
        <ul>
          <Link to={'/race-directory'}>
            <li>Race Directory</li>
          </Link>
          <Link to={'/player-directory'}>
            <li>Player Directory</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;