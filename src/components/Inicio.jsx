import React from 'react';
import Navbar from './Navbar';

function Inicio({ isAuthenticated, onLogout }) {
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <div className="flex items-center justify-center h-[80vh]">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a nuestra aplicación</h2>
          <p className="text-lg">
            {isAuthenticated ? 
              'Explora nuestras funcionalidades usando el menú superior' : 
              'Inicia sesión para acceder a todas las funcionalidades'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;