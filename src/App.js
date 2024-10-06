import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { Secret } from "./hooks/Secret.jsx";

import "./App.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/UseAuth";
import { RegisterUser } from "./pages/RegisterUser.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />  } />
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
        <Route path="/secret" element={ <ProtectedRoute> <Secret /> </ProtectedRoute>}/>
        <Route path="/register" element={ <RegisterUser/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
