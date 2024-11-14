import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchRegister } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";
import { DataStatus } from "../../types/redux";
import { getAllOrganiz } from "../../redux/slices/organizSlice";

export default function Register() {
  const dispatch = useAppDispatch();
  const { organiz: allOrganizName , status: organizStatus} = useAppSelector((state) => state.organiz);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organiz, setOrganiz] = useState("");

  useEffect(() => {
    dispatch(getAllOrganiz());
  }, [])

  return (
    <div className="register">
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        onChange={(e) => setOrganiz(e.target.value)}
        name="organiz"
        id="organiz"
      >
        {
          organizStatus == DataStatus.LOADING ? (
            <option>Loading...</option>
          ) : (
            allOrganizName?.map((organiz) => (
              <option key={organiz} value={organiz}>
                {organiz}
              </option>
            ))
          )}
      </select>
      <button
        onClick={() => {
          dispatch(fetchRegister({ username, password, organiz }));
        }}
      >
        Register
      </button>
      <p>alredy have an account?</p>
      <Link to={"/login"}>please login!</Link>
    </div>
  );
}
