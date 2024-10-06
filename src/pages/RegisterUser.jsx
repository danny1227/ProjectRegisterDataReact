import React, { useState } from "react";
import { useAuth } from "../hooks/UseAuth";
import { useNavigate } from 'react-router-dom';
import icon from '../assets/flecha-curva.png'; // Importa la imagen PNG

export const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dpi, setDpi] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook para navegar

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    console.log(username, password, dpi, email);
  };

  // Función que maneja el clic en el enlace y redirige a /register
  const loginU = (event) => {
    event.preventDefault(); // Evitar comportamiento por defecto del enlace
    console.log('Redirigiendo a la página de registro...');
    navigate('/login'); // Redirigir a la ruta /register
  };

  return (
    <div class="form">
      <form onSubmit={handleLogin}>
        <h3>Registro de usuario</h3>
        <div class="input-group">
          <input id="username" name="username" placeholder="Nombre de usuario" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div class="input-group">
          <input id="dpi" name="dpi" placeholder="DPI" type="text" value={username} onChange={(e) => setDpi(e.target.value)} required />
        </div>
        <div class="input-group">
          <input id="email" name="email" placeholder="Correo" type="email" value={password} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div class="input-group">
          <input id="password" name="password" placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div class="input-group">
          <button type="submit">Registarse</button>
        </div>
        <div class="forget">
          <p> <img class="iconAnterior" src={icon} alt="Icon" />
             <a type="submit" href="#" onClick={loginU}> Login </a>
          </p>
        </div>
      </form>
    </div>
  );
};
