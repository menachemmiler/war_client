import Nav from "./components/Nav";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserPage from "./components/pages/UserPage";
import AdminPage from "./components/pages/AdminPage";
import ValidateUser from "./components/guards/validateUser";
import ValidateAdmin from "./components/guards/ValidateAdmin";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="main">
        <Routes>
          {/* מסלולים ציבוריים */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* מסלולים למשתמש רגיל */}
          <Route
            path="userPage"
            element={
              <ValidateUser>
                <UserPage />
              </ValidateUser>
            }
          />
          {/* מסלולים למשתמש admin */}
          <Route
            path="AdminPage"
            element={
              <ValidateAdmin>
                <AdminPage />
              </ValidateAdmin>
            }
          />

          {/* ניתוב ברירת מחדל */}
          <Route path="/" element={<Navigate to={"/login"} />} />
        </Routes>
      </div>
    </div>
  );
}
