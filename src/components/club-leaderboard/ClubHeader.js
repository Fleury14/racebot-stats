import React from 'react';
import { Button } from 'reactstrap';

import './ClubHeader.scss';

const ClubHeader = (props) => {
  const { abbreviations, onClick } = props;
  return (
    <div className="club-leaderboard-header">
      {abbreviations.map(abbrev => {
        return <Button
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