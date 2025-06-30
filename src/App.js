import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Perfil from './components/Perfil';
import Blog from './components/Blog';
<<<<<<< HEAD
import AdminPanel from './components/AdminPanel';
import FileManagement from './components/FileManagement';
import UserFiles from './components/UserFiles';
=======
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* Ruta principal */}
        <Route path="/" element={<Inicio user={user} onLogout={handleLogout} />} />
        
        {/* Login */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/perfil" /> : <Login onLogin={handleLogin} />} 
=======
        <Route path="/" element={<Inicio isAuthenticated={isAuthenticated} onLogout={handleLogout} />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/perfil" /> : <Login onLogin={handleLogin} />} />
        <Route 
          path="/perfil" 
          element={
            isAuthenticated ? 
              <Perfil onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/blog" 
          element={
            isAuthenticated ? 
              <Blog onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
>>>>>>> 11b48f76abc03e8c7548e7d2d9b80dd79e17c21b
        />
        
        {/* Perfil del usuario */}
        <Route 
          path="/perfil" 
          element={
            user ? 
              <Perfil user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        
        {/* Blog */}
        <Route 
          path="/blog" 
          element={
            user ? 
              <Blog user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        
        {/* Panel de administración (invitaciones) */}
        <Route 
          path="/admin" 
          element={
            user?.role === 'admin' ? 
              <AdminPanel user={user} onLogout={handleLogout} /> : 
              <Navigate to="/" />
          } 
        />
        
        {/* Gestión de archivos (admin) */}
        <Route 
          path="/file-management" 
          element={
            user?.role === 'admin' ? 
              <FileManagement user={user} onLogout={handleLogout} /> : 
              <Navigate to="/" />
          } 
        />
        
        {/* Archivos del usuario */}
        <Route 
          path="/my-files" 
          element={
            user ? 
              <UserFiles user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        
        {/* Ruta de fallback para páginas no encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;