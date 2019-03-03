import React from 'react';

export const RightArrowButton = ({clicked}) => {
    const alt = 'right arrow button'

    const iconStyleWhenClicked = {
      transform: clicked ? 'rotate(90deg)' : ''
    }

    return (
      <svg
        role="img"
        aria-label={alt}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="Icon"
        style={iconStyleWhenClicked}
      >
        <title>{alt}</title>
        <path
          fill="#35a930"
          fillRule="evenodd"
          d="M17.656 9.293a.999.999 0 0 0-1.414 0l-4.268 4.268-4.267-4.268a.999.999 0 1 0-1.414 1.414l4.95 4.95a.99.99 0 0 0 .731.288.99.99 0 0 0 .733-.288l4.95-4.95a.999.999 0 0 0 0-1.414"
          transform="rotate(-90 12 12)"
        />
      </svg>
    )
  }

export default RightArrowButton;