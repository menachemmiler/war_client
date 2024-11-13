import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import UserPage from "./components/pages/UserPage";
import AdminPage from "./components/pages/AdminPage";
import ValidateAdmin from "./components/guards/ValidateAdmin";
import ValidateUser from "./components/guards/ValidateUser";
import Register from "./components/auth/Register";

export default function App() {
  return (
    <div className="app">
      <Routes>
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
        {/* <Route
            path="AdminPage"
            element={
              <ValidateAdmin>
                <AdminPage />
              </ValidateAdmin>
            }
          /> */}

        {/* ניתוב ברירת מחדל */}
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}
