import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="nav flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img className='logo' src="/img/logoo.png" alt='logo'/>
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-gray-200">
          Inicio
        </Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/blog" className="text-white hover:text-gray-200">
              Blog
            </Link>
            <Link to="/perfil" className="text-white hover:text-gray-200">
              Perfil
            </Link>
            <button
              onClick={() => {
                onLogout();
                navigate('/');
              }}
              className="bg-white text-[#7f00b2] px-4 py-2 rounded hover:bg-gray-200"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link 
            to="/login" 
            className="bg-white text-[#7f00b2] px-4 py-2 rounded hover:bg-gray-200"
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;