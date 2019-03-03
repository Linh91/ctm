import React from 'react';

import './headerButton.css';

export const HeaderButton = ({ icon, name }) => {
  return (
    <button className="MenuTabContainer">
      <div className="Icon">
        {icon}
      </div>
      <p className="MenuCategory">{name}</p>
    </button>
  )
}

export default HeaderButton;