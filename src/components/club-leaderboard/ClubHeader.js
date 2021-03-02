import React from 'react';
import { Button } from 'reactstrap';

import './ClubHeader.scss';

const ClubHeader = (props) => {
  const { abbreviations, onClick, activeClub } = props;
  return (
    <div className="club-leaderboard-header">
      {abbreviations.map((abbrev, index) => {
        return <Button 
          color="primary"
          active={activeClub === index}
          key={abbrev}
          onClick={() => onClick(abbrev)}
        >
          {abbrev}
        </Button>
      })}
    </div>
  )
}

export default ClubHeader;