import React from 'react';

import './icon.css';

export const TravelIcon = () => {
    const alt = 'Travel'
    return (
      <svg 
        aria-label={alt}
        width="24" 
        height="24" 
        xmlns="http://www.w3.org/2000/svg" 
        fillRule="evenodd" 
        clipRule="evenodd"
        className="MenuIcon">
        <path 
          fill="#FFFFFF"
          d="M3.691 10h6.309l-3-7h2l7 7h5c1.322-.007 3 1.002 3 2s-1.69 1.993-3 2h-5l-7 7h-2l3-7h-6.309l-2.292 2h-1.399l1.491-4-1.491-4h1.399l2.292 2"/>
      </svg>
    )
  }

export default TravelIcon;