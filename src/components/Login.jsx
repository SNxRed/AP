import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validUser = 'admin';
  const validPass = '1234';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUser && password === validPass) {
      onLogin();
      navigate('/perfil');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <Navbar isAuthenticated={false} />
      <div className="login-wrap flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-2xl mb-4">Iniciar Sesión</h2>

        <form className="form bg-white p-6 rounded shadow-md w-80" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            name="un"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
            required
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#7f00b2] text-white font-semibold py-2 rounded hover:bg-[#6c009f]"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;