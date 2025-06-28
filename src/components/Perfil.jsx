import React, { useState } from 'react';
import Navbar from './Navbar';
import MedidasForm from './MedidasForm';

function Perfil({ user, onLogout }) {
  const [medidas, setMedidas] = useState([]);
  const [activeTab, setActiveTab] = useState('medidas');
  const [showMedidasForm, setShowMedidasForm] = useState(false);

  const handleAddMedidas = (newMedidas) => {
    setMedidas([...medidas, { 
      ...newMedidas, 
      date: new Date().toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) 
    }]);
    setShowMedidasForm(false);
  };

  return (
    <div className="profile-app">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="profile-container">
        {/* Header del perfil */}
        <div className="profile-header">
          <div className="profile-banner" style={{ backgroundImage: 'linear-gradient(135deg, #7f00b2, #e100ff)' }}></div>
          
          <div className="profile-info">
            <div className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            
            <div className="profile-details">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-username">@{user.username}</p>
            </div>
            
            <div className="profile-actions">
              {user.role === 'admin' && (
                <span className="badge-admin">ADMIN</span>
              )}
              <button 
                className="btn-edit-profile"
                onClick={() => setShowMedidasForm(!showMedidasForm)}
              >
                {showMedidasForm ? 'Cancelar' : 'Agregar Medidas'}
              </button>
            </div>
          </div>
        </div>

        {/* Formulario de medidas (condicional) */}
        {showMedidasForm && (
          <div className="profile-card medidas-form-container">
            <MedidasForm onAddMedidas={handleAddMedidas} />
          </div>
        )}

        {/* Tabs de navegación */}
        <div className="profile-tabs">
          <button 
            className={`tab-btn ${activeTab === 'medidas' ? 'active' : ''}`}
            onClick={() => setActiveTab('medidas')}
          >
            Mis Medidas
          </button>
          <button 
            className={`tab-btn ${activeTab === 'actividad' ? 'active' : ''}`}
            onClick={() => setActiveTab('actividad')}
          >
            Actividad
          </button>
          <button 
            className={`tab-btn ${activeTab === 'sobre' ? 'active' : ''}`}
            onClick={() => setActiveTab('sobre')}
          >
            Sobre Mí
          </button>
        </div>

        {/* Contenido de los tabs */}
        <div className="profile-content">
          {activeTab === 'medidas' && (
            <div className="profile-card">
              <h2 className="section-title">Historial de Medidas</h2>
              
              {medidas.length === 0 ? (
                <p className="empty-state">No hay registros de medidas aún.</p>
              ) : (
                <div className="medidas-grid">
                  {medidas.map((item, index) => (
                    <div key={index} className="medida-card hover-effect">
                      <div className="medida-header">
                        <span className="medida-date">{item.date}</span>
                      </div>
                      <div className="medida-details">
                        <div className="medida-item">
                          <span className="medida-label">Altura</span>
                          <span className="medida-value">{item.altura} cm</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Peso</span>
                          <span className="medida-value">{item.peso} kg</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Brazo</span>
                          <span className="medida-value">{item.brazo} cm</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Piernas</span>
                          <span className="medida-value">{item.piernas} cm</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Cintura</span>
                          <span className="medida-value">{item.cintura} cm</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Abdomen</span>
                          <span className="medida-value">{item.abdomen} cm</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Gemelo</span>
                          <span className="medida-value">{item.gemelo} cm</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Espalda</span>
                          <span className="medida-value">{item.espalda} cm</span>
                        </div>
                        <div className="medida-item">
                          <span className="medida-label">Torso</span>
                          <span className="medida-value">{item.torso} cm</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'actividad' && (
            <div className="profile-card">
              <h2 className="section-title">Actividad Reciente</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">🏋️</div>
                  <div className="activity-content">
                    <p>Completaste tu rutina de piernas hoy</p>
                    <span className="activity-time">Hace 2 horas</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">💪</div>
                  <div className="activity-content">
                    <p>Nuevo récord en press de banca: 80kg</p>
                    <span className="activity-time">Ayer</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📊</div>
                  <div className="activity-content">
                    <p>Actualizaste tus medidas corporales</p>
                    <span className="activity-time">3 días atrás</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'sobre' && (
            <div className="profile-card">
              <h2 className="section-title">Sobre Mí</h2>
              <div className="about-section">
                <div className="about-item">
                  <h3 className="about-label">Información Básica</h3>
                  <p><strong>Nombre:</strong> {user.name}</p>
                  <p><strong>Usuario:</strong> @{user.username}</p>
                  <p><strong>Rol:</strong> {user.role}</p>
                  <p><strong>Miembro desde:</strong> Enero 2023</p>
                </div>
                
                <div className="about-item">
                  <h3 className="about-label">Objetivos Fitness</h3>
                  <p>🏆 Ganar masa muscular</p>
                  <p>💪 Aumentar fuerza en ejercicios compuestos</p>
                  <p>🏃‍♂️ Mejorar resistencia cardiovascular</p>
                </div>
                
                {user.role === 'admin' && (
                  <div className="about-item admin-features">
                    <h3 className="about-label">Privilegios de Administrador</h3>
                    <p>🔧 Puedes gestionar usuarios</p>
                    <p>📝 Puedes moderar contenido</p>
                    <p>⚙️ Tienes acceso al panel de administración</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Perfil;