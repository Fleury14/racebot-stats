import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faStar, faSeedling, faRunning } from '@fortawesome/free-solid-svg-icons'
import './DrawBadges.scss';

import CookieIcon from '../../icons/cookie.svg';

function badgeParse(badge) {
  if (!badge || !badge.name) return null;
  switch (badge.name) {
    case 'Cookie Monster':
      return badge.enabled !== false ? {
        bgColor: '#E9C48C',
        textColor: '#000000',
        text: 'Cookie Monster',
        icon: CookieIcon,
        description: 'Purchased for 500 cookies',
        cost: badge.cost,
        purchased: badge.purchased 
      } : null;
    case 'High Roller':
      return badge.enabled !== false ? {
        bgColor: '#400209',
        textColor: '#FFFFFF',
        text: 'High Roller',
        faClass: faDice,
        description: 'Wagered over 100 cookies in a single race',
      } : null;
    case 'Jackpot':
      return badge.enabled !== false ? {
        bgColor: '#ffd700',
        textColor: '#000000',
        text: 'Jackpot',
        faClass: faStar,
        description: 'Won over 200 cookies in a single race',
      } : null;
    case 'Tree Planter':
      return badge.enabled !== false ? {
        bgColor: '#42692f',
        textColor: '#ffffff',
        text: 'Tree Planter',
        faClass: faSeedling,
        description: 'Rolled over 100 seeds',
      } : null;
    case 'Race Enthusiast': 
      return badge.enabled !== false ? {
        bgColor: '#00a3cc',
        textColor: '#ffffff',
        text: 'Race Enthusiast',
        faClass: faRunning,
        description: 'Participated in over 300 races',
      } : null;
    default:
      return null;
  }
}

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
