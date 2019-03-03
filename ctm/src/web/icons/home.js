import React from 'react';

export const HomePetIcon = () => {
    const alt = 'Home and pets'
    return (
      <svg 
        aria-label={alt}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
        className="MenuIcon">
        <path 
          fill="#FFFFFF"
          d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/>
      </svg>
    )
  }

export default HomePetIcon;