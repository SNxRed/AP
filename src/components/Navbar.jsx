import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="nav flex items-center justify-between px-6 py-4 bg-[#7f00b2]">
      <div className="flex items-center space-x-8"> {/* Contenedor flexible para logo y botones */}
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className='logo h-10' src="/img/logoo.png" alt='logo' />
        </Link>

        {/* Botones de navegación */}
        <div className="flex items-center space-x-4"> {/* Contenedor para los botones */}
          <Link 
            to="/" 
            className="text-white px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
          >
            Inicio
          </Link>
          
          {isAuthenticated && (
            <>
              <Link 
                to="/blog" 
                className="text-white px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
              >
                Blog
              </Link>
              <Link 
                to="/perfil" 
                className="text-white px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
              >
                Perfil
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Botón de Login/Cerrar sesión (derecha) */}
      {isAuthenticated ? (
        <button
          onClick={() => {
            onLogout();
            navigate('/');
          }}
          className="text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
        >
          Cerrar sesión
        </button>
      ) : (
        <Link 
          to="/login" 
          className="text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
        >
          Iniciar sesión
        </Link>
      )}
    </nav>
  );
}

export default Navbar;