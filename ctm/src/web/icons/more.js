import React from 'react';

import './icon.css';

export const MoreIcon = (alText) => {
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
        <path
          fill="#1E488C"
          d="M13 23l-9.983-.014v-9.979l8.974-7.995c1.124.999 2.25 1.998 3.378 2.998l2.255 1.999c1.127.999 2.252 1.992 3.376 2.991v10l-5.993-.014-.007-4.986h-2v5zm6-2l.019-7.121-7.028-6.193-6.991 6.218v7.096h6v-5h6v5h2zm-10-5v3h-2v-3h2zm3-15l12 10.654-1.328 1.494-10.672-9.488-10.672 9.488-1.328-1.494 12-10.654z"/>
      </svg>
    )
  }

export default MoreIcon;