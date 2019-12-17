import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { badgeParse } from '../../helpers';
import './DrawBadges.scss';

const DrawBadges = (props) => {
  const badgeOutput = [];
  const { badges } = props;
  // console.log('badge', badges);
  badges.forEach(badge => {
    const badgeResult = badgeParse(badge);
    if (badgeResult) badgeOutput.push(badgeResult);
  });
  return (
    <div className="badge-container">
      {badgeOutput.map(badge => {
        return (
          <div className="badge-wrap" key={badge.text} style={{ backgroundColor: badge.bgColor, color: badge.textColor }}>
            {badge.description ? (
              <span className="badge-tooltip">{badge.description}</span>
            ) : null}
            <span>{badge.text}</span>
            {badge.icon ? (
              <img src={badge.icon} alt={badge.text} height={30} width={30} />
            ) : null}
            {badge.faClass ? (
              <FontAwesomeIcon icon={badge.faClass} className='badge-fa-icon' />
            ): null}
            
          </div>
        );
      })}
    </div>
  )
}

export default DrawBadges;
