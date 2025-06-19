// components/MedidasForm.jsx
import React, { useState } from 'react';

function MedidasForm({ onAddMedidas }) {
  const [medidas, setMedidas] = useState({
    peso: '',
    altura: '',
    biceps: '',
    pecho: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedidas(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMedidas(medidas);
    setMedidas({
      peso: '',
      altura: '',
      biceps: '',
      pecho: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium">Peso (kg)</label>
        <input
          type="number"
          name="peso"
          value={medidas.peso}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium">Altura (cm)</label>
        <input
          type="number"
          name="altura"
          value={medidas.altura}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium">Bíceps (cm)</label>
        <input
          type="number"
          name="biceps"
          value={medidas.biceps}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium">Pecho (cm)</label>
        <input
          type="number"
          name="pecho"
          value={medidas.pecho}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-[#7f00b2] text-white py-2 rounded hover:bg-[#6c009f]"
      >
        Guardar Medidas
      </button>
    </form>
  );
}

export default MedidasForm;