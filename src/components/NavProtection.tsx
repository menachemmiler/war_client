import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { logout } from "../redux/slices/userSlice";
import { DataStatus } from "../types/redux";

export default function NavProtection() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, status } = useAppSelector((state) => state.user);

  status == DataStatus.LOADING && <div>loading...</div>;

  return (
    <div className="nav">
      <>
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          logout
        </button>
      </>
    </div>
  );
}
