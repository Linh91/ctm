import React from 'react';

import './icon.css';

export const FinancesIcon = () => {
    const alt = 'Finances'
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
          d="M24.4,1.3H2.7c-0.7,0-1.3,0.6-1.3,1.3v2h24.4v-2C25.7,1.9,25.1,1.3,24.4,1.3z M1.3,16.5c0,0.7,0.6,1.3,1.3,1.3
	        h21.7c0.7,0,1.3-0.6,1.3-1.3V7.9H1.3L1.3,16.5L1.3,16.5z M8.5,13.3H16v0.4H8.5V13.3z M4,13.3h3.1v0.4H4V13.3z"/>
      </svg>
    )
  }

export default FinancesIcon;