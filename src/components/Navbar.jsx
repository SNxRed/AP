/* // components/Navbar.jsx
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
 */

// components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ showLogout, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="nav flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link to="/inicio" className="flex items-center">
          <img className='logo' src="/img/logoo.png" alt='logo'/>
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        {showLogout && (
          <>
            <Link to="/perfil" className="text-white hover:text-gray-200">
              Perfil
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-200">
              Blog
            </Link>
            <button
              onClick={() => {
                onLogout();
                navigate('/login');
              }}
              className="buton bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;