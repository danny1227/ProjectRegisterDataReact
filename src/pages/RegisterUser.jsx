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


    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dpi, username, email, password }),
      });
  
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        if (response.status === 201) {
          console.log(response.token);
          console.log(response.ok);
          console.log('Nos registramos');
          
          navigate('/login'); // Redirigir a la ruta /register
          // Replace with actual authentication logic
        } else {
          console.log(response.token);
          console.log(response.ok);
          console.log("Datos invalidos");
        }
      
  } catch (error) {
    console.error("Error:", error); // Manejo de errores
    alert("Ha ocurrido un error al registrarse.");
  }

  };

  // Función que maneja el clic en el enlace y redirige a /register
  const loginU = (event) => {
    event.preventDefault(); // Evitar comportamiento por defecto del enlace
    console.log('Redirigiendo a la página de registro...');
    navigate('/login'); // Redirigir a la ruta /register
  };

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <h3>Registro de usuario</h3>
        <div className="input-group">
          <input id="username" name="username" placeholder="Nombre de usuario" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <input id="dpi" name="dpi" placeholder="DPI" type="text" value={dpi} onChange={(e) => setDpi(e.target.value)} required />
        </div>
        <div className="input-group">
          <input id="email" name="email" placeholder="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="input-group">
          <input id="password" name="password" placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="input-group">
          <button type="submit">Registrarse</button>
        </div>
        <div className="forget">
          <p> <img className="iconAnterior" src={icon} alt="Icon" />
             <a type="submit" href="/" onClick={loginU}> Login </a>
          </p>
        </div>
      </form>
    </div>
  );
};
