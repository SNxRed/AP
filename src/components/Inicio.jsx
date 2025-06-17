/* import React from 'react';
import Navbar from './Navbar';

function Inicio({ onLogout }) {
  return (
    <div>
      <Navbar showLogout={true} onLogout={onLogout} />
      <div className="flex items-center justify-center h-[80vh]">
        <h2 className="text-2xl">Bienvenido a la página de inicio</h2>
      </div>
    </div>
  );
}

export default Inicio; */
// components/Inicio.jsx
import React from 'react';
import Navbar from './Navbar';

function Inicio({ onLogout }) {
  return (
    <div>
      <Navbar showLogout={true} onLogout={onLogout} />
      <div className="flex items-center justify-center h-[80vh]">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a la página de inicio</h2>
          <p className="text-lg">Navega usando el menú superior para acceder a las diferentes secciones.</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;