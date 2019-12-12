import React from 'react';
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
        textColor: '#eee',
        text: 'High Roller',
        icon: CookieIcon,
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
          <div className="badge-wrap" key={badge.text} style={{ backgroundColor: badge.bgColor }}>
            <span>{badge.text}</span>
            <img src={badge.icon} alt={badge.text} height={30} width={30} />
          </div>
        );
      })}
    </div>
  )
}

export default DrawBadges;
