// components/Navbar.jsx
import React from 'react';
//import './img/'

function Navbar({ showLogout, onLogout }) {
  return (
    <nav className="nav">
      <a className="">
        <img className='logo' src="/img/logoo.png" alt='logo'/>
        
      </a>

      {showLogout && (
        <button
          onClick={onLogout}
          className="buton"
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}

export default Navbar;
