import React, { useState } from 'react';

function MedidasForm({ onAddMedidas }) {
  const [medidas, setMedidas] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedidas(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMedidas(medidas);
    setMedidas({
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
  };

  return (
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
      </div>
      
      <button
        type="submit"
        className="medida-submit-btn"
      >
        Guardar Medidas
      </button>
    </form>
  );
}

export default MedidasForm;