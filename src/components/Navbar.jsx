import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

<<<<<<< HEAD
function Navbar({ user, onLogout }) {
=======
function Navbar({ isAuthenticated, onLogout }) {
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
  const navigate = useNavigate();

  return (
    <nav className="nav flex items-center justify-between px-6 py-4 bg-[#7f00b2]">
      <div className="flex items-center space-x-8">
<<<<<<< HEAD
        <div className="flex items-center">
=======
        {/* Logo - Cambiado para evitar el hover */}
        <div className="flex items-center"> {/* Eliminado el Link que envolvía el logo */}
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
          <img 
            className='logo h-10 hover:opacity-90 transition-opacity duration-200' 
            src="/img/logoo.png" 
            alt='logo' 
<<<<<<< HEAD
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="flex items-center space-x-4">
=======
            onClick={() => navigate('/')} // Añadido onClick para mantener la navegación
            style={{ cursor: 'pointer' }} // Para indicar que es clickeable
          />
        </div>

        {/* Botones de navegación */}
        <div className="flex items-center space-x-4"> {/* Contenedor para los botones */}
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
          <Link 
            to="/" 
            className="text-white px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
          >
            Inicio
          </Link>
          
<<<<<<< HEAD
          {user && (
=======
          {isAuthenticated && (
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
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
<<<<<<< HEAD
              <Link 
                to="/my-files" 
                className="text-white px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
              >
                Mis Archivos
              </Link>
              {user.role === 'admin' && (
                <>
                  <Link 
                    to="/admin" 
                    className="text-white px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
                  >
                    Invitar
                  </Link>
                  <Link 
                    to="/file-management" 
                    className="text-white px-4 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
                  >
                    Archivos
                  </Link>
                </>
              )}
=======
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
            </>
          )}
        </div>
      </div>

<<<<<<< HEAD
      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-white">Hola, {user.name}</span>
          <button
            onClick={() => {
              onLogout();
              navigate('/');
            }}
            className="text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-[#7f00b2] transition-all duration-300"
          >
            Cerrar sesión
          </button>
        </div>
=======
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
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
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