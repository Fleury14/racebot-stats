import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faStar, faSeedling, faRunning } from '@fortawesome/free-solid-svg-icons'
import './DrawBadges.scss';

import CookieIcon from '../../icons/cookie.svg';

function badgeParse(badge) {
  if (!badge || !badge.name) return null;
  switch (badge.name) {
    case 'Cookie Monster':
      return badge.enabled ? {
        bgColor: '#E9C48C',
        textColor: '#000000',
        text: 'Cookie Monster',
        icon: CookieIcon,
        cost: badge.cost,
        purchased: badge.purchased 
      } : null;
    case 'High Roller':
      return badge.enabled ? {
        bgColor: '#400209',
        textColor: '#FFFFFF',
        text: 'High Roller',
        faClass: faDice,
      } : null;
    case 'Jackpot':
      return badge.enabled ? {
        bgColor: '#ffd700',
        textColor: '#000000',
        text: 'Jackpot',
        faClass: faStar,
      } : null;
    case 'Tree Planter':
      return badge.enabled ? {
        bgColor: '#42692f',
        textColor: '#ffffff',
        text: 'Tree Planter',
        faClass: faSeedling,
      } : null;
    case 'Race Enthusiast': 
      return badge.enabled ? {
        bgColor: '#00a3cc',
        textColor: '#ffffff',
        text: 'Race Enthusiast',
        faClass: faRunning
      } : null;
    default:
      return null;
  }
}

const DrawBadges = (props) => {
  const badgeOutput = [];
  const { badges } = props;
  badges.forEach(badge => {
    const badgeResult = badgeParse(badge);
    if (badgeResult) badgeOutput.push(badgeResult);
  });
  return (
    <div className="badge-container">
      {badgeOutput.map(badge => {
        return (
          <div className="badge-wrap" key={badge.text} style={{ backgroundColor: badge.bgColor, color: badge.textColor }}>
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
