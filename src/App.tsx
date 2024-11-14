import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AttackPage from "./components/pages/AttackPage";
import ProtectionPage from "./components/pages/ProtectionPage";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="AttackPage" element={<AttackPage />} />
        <Route path="ProtectionPage" element={<ProtectionPage />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}
