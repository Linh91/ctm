import React from 'react';

import './headerMenuButton.css';

export const HeaderMenuButton = ({ icon, name }) => {
  return (
    <button className="MenuTabContainer">
      <div className="Icon">
        {icon}
      </div>
      <p className="MenuCategory">{name}</p>
    </button>
  )
}

export default HeaderMenuButton;