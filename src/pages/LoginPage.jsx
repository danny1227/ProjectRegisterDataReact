import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/UseAuth";
import "./LoginPage.css"; // Importar archivo de estilos
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook para navegar

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    try {
      const loginUser = async (username, password) => {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
  
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        if (response.status === 201) {
          console.log(response.token);
          console.log(response.ok);
          // Replace with actual authentication logic
          await login({ username });
        } else {
          console.log(response.token);
          console.log(response.ok);
          alert("Invalid username or password");
        }
      };
    
      await loginUser(username, password); // Llamar a la función de login
  } catch (error) {
    console.error("Error:", error); // Manejo de errores
    alert("An error occurred while logging in.");
  }

  };

  // Función que maneja el clic en el enlace y redirige a /register
  const registerU = (event) => {
    event.preventDefault(); // Evitar comportamiento por defecto del enlace
    console.log("Redirigiendo a la página de registro...");
    navigate("/register"); // Redirigir a la ruta /register
  };

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className="input-group">
          <input
            id="username"
            name="username"
            placeholder="Correo de usuario"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            id="password"
            name="password"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <button type="submit">Login</button>
        </div>
        <div className="forget">
          <p>
            {" "}
            ¿Aún no tiene usuario?
            <a type="submit" href="#" onClick={registerU}>
              Registrarme
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
