import { NavLink, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import userSlice from "../redux/slices/userSlice";

export default function Nav() {
  const user = useAppSelector((state: RootState) => state.user);
  const data = useAppSelector((state: RootState) => state.user.data);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userSlice.actions.logout());
    
    navigate("/login");
  };

  return (
    <div className="nav">
      {user.user ? (
        <>
          <p>אתה מחובר</p>
          <NavLink to={"/userPage"}>userPage</NavLink>
          {user.user.isAdmin && (
            <>
              <p>אתה מנהל מערכת</p>
              <NavLink to={"/AdminPage"}>AdminPage</NavLink>
            </>
          )}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>אתה לא מחובר</p>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </>
      )}
    </div>
  );
}
