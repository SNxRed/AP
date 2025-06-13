import React from 'react';
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

export default Inicio;