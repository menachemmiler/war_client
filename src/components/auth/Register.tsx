import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { fetchRegister } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";

export default function Register() {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organiz, setOrganiz] = useState("");

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
        <option value="il">Israel</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
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
