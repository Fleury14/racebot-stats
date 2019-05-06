import React from 'react';
import './Navbar.scss';

const Navbar = (props) => {
  return (
    <div className="navbar-container open-sans">
      <h3>RACEBOT STATS</h3>
      <p>A stats page for the Discord Racebot built by Supremacy</p>
      <div className="sub-nav">
        <ul>
          <li>Race Directory</li>
          <li>Player Directory</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;