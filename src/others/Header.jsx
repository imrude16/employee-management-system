// src/others/Header.jsx
import React from 'react';

const Header = ({ changeUser, firstName }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  const displayName = firstName || 'Guys';

  return (
    <div id='header' className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{displayName}</span> 😊
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-500 hover:bg-red-600 rounded-sm text-lg font-medium px-4 py-2'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
