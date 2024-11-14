import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { logout } from "../redux/slices/userSlice";
import { DataStatus } from "../types/redux";
import { useState } from "react";

interface Props {
  setArea: (area: string) => void;
}

export default function NavAttack({ setArea }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, status } = useAppSelector((state) => state.user);
  const allErea = ["North", "South", "Center", "West Bank"];

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
        {
          <select onChange={(e) => setArea(e.target.value)}>
            {allErea.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        }
      </>
    </div>
  );
}
