<<<<<<< HEAD
=======
// components/MedidasForm.jsx
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
import React, { useState } from 'react';

function MedidasForm({ onAddMedidas }) {
  const [medidas, setMedidas] = useState({
<<<<<<< HEAD
    altura: '',
    peso: '',
    brazo: '',
    piernas: '',
    cintura: '',
    abdomen: '',
    gemelo: '',
    espalda: '',
    torso: ''
  });

  const medidasConfig = [
    { label: 'Altura (cm)', name: 'altura' },
    { label: 'Peso (kg)', name: 'peso' },
    { label: 'Brazo (cm)', name: 'brazo' },
    { label: 'Piernas (cm)', name: 'piernas' },
    { label: 'Cintura (cm)', name: 'cintura' },
    { label: 'Abdomen (cm)', name: 'abdomen' },
    { label: 'Gemelo (cm)', name: 'gemelo' },
    { label: 'Espalda (cm)', name: 'espalda' },
    { label: 'Torso (cm)', name: 'torso' }
  ];

=======
    peso: '',
    altura: '',
    biceps: '',
    pecho: ''
  });

>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedidas(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMedidas(medidas);
    setMedidas({
<<<<<<< HEAD
      altura: '',
      peso: '',
      brazo: '',
      piernas: '',
      cintura: '',
      abdomen: '',
      gemelo: '',
      espalda: '',
      torso: ''
=======
      peso: '',
      altura: '',
      biceps: '',
      pecho: ''
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
    });
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="medidas-form">
      <div className="medidas-form-grid">
        {medidasConfig.map((item) => (
          <div key={item.name} className="medida-input-group">
            <label className="medida-label">{item.label}</label>
            <input
              type="number"
              name={item.name}
              value={medidas[item.name]}
              onChange={handleChange}
              className="medida-input"
              required
              step="0.01"
            />
          </div>
        ))}
=======
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
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
      </div>
      
      <button
        type="submit"
<<<<<<< HEAD
        className="medida-submit-btn"
=======
        className="w-full bg-[#7f00b2] text-white py-2 rounded hover:bg-[#6c009f]"
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
      >
        Guardar Medidas
      </button>
    </form>
  );
}

export default MedidasForm;