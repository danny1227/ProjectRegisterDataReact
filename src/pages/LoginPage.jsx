import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/UseAuth";
import './LoginPage.css';  // Importar archivo de estilos
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook para navegar

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === "user" && password === "password") {
      // Replace with actual authentication logic
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
  };

  // Función que maneja el clic en el enlace y redirige a /register
  const registerU = (event) => {
    event.preventDefault(); // Evitar comportamiento por defecto del enlace
    console.log('Redirigiendo a la página de registro...');
    navigate('/register'); // Redirigir a la ruta /register
  };

  return (
    <div class="form">
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div class="input-group">
          <input id="username" name="username" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div class="input-group">
          <input id="password" name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div class="input-group">
          <button type="submit">Login</button>
        </div>
        <div class="forget">
          <p> ¿Aún no tiene usuario? 
          <a type="submit" href="#" onClick={registerU}>Registrarme</a>
          </p>
        </div>
      </form>
    </div>
  );
};
