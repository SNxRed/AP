import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Perfil from './components/Perfil';
import Blog from './components/Blog';
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
        <Route path="/" element={<Inicio user={user} onLogout={handleLogout} />} />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/perfil" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/perfil" 
          element={
            user ? 
              <Perfil user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
        <Route 
          path="/blog" 
          element={
            user ? 
              <Blog user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;