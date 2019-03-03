import React from 'react';

import './icon.css';

export const HouseIcon = (alText) => {
    const alt = alText
    return (
      <svg 
        aria-label={alt}
        width="24" 
        height="24" 
        xmlns="http://www.w3.org/2000/svg" 
        fillRule="evenodd" 
        clipRule="evenodd"
        className="MenuIcon">
        <path fill="#FFFFFF" d="M3.591,10.419l8.833-6.5l8.833,6.166v10.334h-6.833v-6h-4v6H3.591V10.419z M12.442,0L6.258,4.529V1.252
	        H2.591v5.962L0,9.113l1.182,1.613l11.225-8.221l10.571,8.203l1.227-1.58L12.442,0z"/>
      </svg>
    )
  }

export default HouseIcon;