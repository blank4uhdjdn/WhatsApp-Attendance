import React from 'react';
import { BiLogOut } from 'react-icons/bi';

import './LogoutButton.css'; // Import your CSS file

function LogoutButton() {
  

  return (
    <div className="logout-button">
      <BiLogOut className="logout-icon" onClick={logout} />
    </div>
  );
}

export default LogoutButton;
