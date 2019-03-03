import React from 'react';

import './icon.css';

export const TravelIcon = () => {
    const alt = 'Travel'
    return (
      <svg
        aria-label={alt}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 22 20.4" 
        enableBackground="new 0 0 22 20.4;" 
        space="preserve"
        className="DefaultIconClass">
        <path 
          fill="#FFFFFF"
          d="M17.1,1.3C17.6,0.9,19,1,19.3,1.7c0.2,0.5,0.6,1.5,0.2,1.9c-1.4,1.5-3.3,3.6-4.8,5.1c0.8,3.3,1.7,6.3,2.5,9.6
          c-0.5,0.6-1.1,1.2-1.7,1.8c-1.4-2.8-3.2-5.1-4.6-8c-0.9,1.1-1.9,1.6-2.9,2.6c-0.1,0.1-0.4,0.4-0.2,0.6C8,16.2,7.6,17,7.7,17.7
          c-0.5,0.5-0.8,1-1.3,1.3c-0.5-1.1-0.5-2.1-1.1-3.1c-0.9-0.6-2.4-0.6-3.3-1.1c0.5-0.5,0.8-0.8,1.2-1.3c0.8,0,2.1-0.2,3.1-0.2
          c1.1-1.2,1.7-2.7,2.7-3.9c-2.6-1.5-5.8-2.5-8.4-4c0.6-0.6,1.1-1.7,1.7-2.3c3.2,0.9,6.9,2.3,10.2,3.2C13.6,4.9,15.7,2.9,17.1,1.3z"/>
      </svg>
    )
  }

export default TravelIcon;