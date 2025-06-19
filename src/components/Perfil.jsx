import React, { useState } from 'react';
import Navbar from './Navbar';

function Perfil({ onLogout }) {
  const [user] = useState({
    name: 'Admin',
    email: 'admin@example.com',
    joinDate: '01/01/2023'
  });

  const [medidas, setMedidas] = useState([]);
  const [newMedidas, setNewMedidas] = useState({
    peso: '',
    altura: '',
    biceps: '',
    pecho: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedidas(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMedidas.peso && newMedidas.altura) {
      setMedidas([...medidas, { 
        ...newMedidas, 
        date: new Date().toLocaleDateString() 
      }]);
      setNewMedidas({
        peso: '',
        altura: '',
        biceps: '',
        pecho: ''
      });
    }
  };

  return (
    <div>
      <Navbar isAuthenticated={true} onLogout={onLogout} />
      
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
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium">Peso (kg)</label>
                  <input
                    type="number"
                    name="peso"
                    value={newMedidas.peso}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium">Altura (cm)</label>
                  <input
                    type="number"
                    name="altura"
                    value={newMedidas.altura}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium">Bíceps (cm)</label>
                  <input
                    type="number"
                    name="biceps"
                    value={newMedidas.biceps}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium">Pecho (cm)</label>
                  <input
                    type="number"
                    name="pecho"
                    value={newMedidas.pecho}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#7f00b2] text-white py-2 rounded hover:bg-[#6c009f]"
                >
                  Guardar Medidas
                </button>
              </form>
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
                      <td className="py-2 px-4 border-b text-center">{m.biceps || '-'}</td>
                      <td className="py-2 px-4 border-b text-center">{m.pecho || '-'}</td>
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