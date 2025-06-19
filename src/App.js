import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Perfil from './components/Perfil';
import Blog from './components/Blog';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Routes>
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
        />
      </Routes>
    </Router>
  );
}

export default App;