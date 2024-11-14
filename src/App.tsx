import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AttackPage from "./components/pages/AttackPage";
import ProtectionPage from "./components/pages/ProtectionPage";
import { useEffect } from "react";
import { socket } from "./socket/io";
import {  updateUser } from "./redux/slices/userSlice";
import { useAppDispatch } from "./redux/store";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on("updateUser", (newUSer) => {
      dispatch(updateUser(newUSer));
    });
  }, []);

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
