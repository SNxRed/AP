// components/Perfil.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import MedidasForm from './MedidasForm';

function Perfil({ onLogout }) {
  const [user] = useState({
    name: 'Admin',
    email: 'admin@example.com',
    joinDate: '01/01/2023'
  });

  const [medidas, setMedidas] = useState([]);

  const handleAddMedidas = (newMedidas) => {
    setMedidas([...medidas, { ...newMedidas, date: new Date().toLocaleDateString() }]);
  };

  return (
    <div>
      <Navbar showLogout={true} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold mb-4">Perfil de Usuario</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Información Personal</h2>
              <p><span className="font-medium">Nombre:</span> {user.name}</p>
              <p><span className="font-medium">Email:</span> {user.email}</p>
              <p><span className="font-medium">Miembro desde:</span> {user.joinDate}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Agregar Medidas</h2>
              <MedidasForm onAddMedidas={handleAddMedidas} />
            </div>
          </div>
        </div>
        
        {medidas.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Historial de Medidas</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Fecha</th>
                    <th className="py-2 px-4 border-b">Peso (kg)</th>
                    <th className="py-2 px-4 border-b">Altura (cm)</th>
                    <th className="py-2 px-4 border-b">Bíceps (cm)</th>
                    <th className="py-2 px-4 border-b">Pecho (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {medidas.map((m, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-center">{m.date}</td>
                      <td className="py-2 px-4 border-b text-center">{m.peso}</td>
                      <td className="py-2 px-4 border-b text-center">{m.altura}</td>
                      <td className="py-2 px-4 border-b text-center">{m.biceps}</td>
                      <td className="py-2 px-4 border-b text-center">{m.pecho}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Perfil;