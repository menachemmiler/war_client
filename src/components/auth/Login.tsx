import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchLogin } from "../../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { socket } from "../../main";

export default function Login() {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user?._id) {
      socket.emit("login");
      navigate("/userPage");
    }
  }, [user, navigate]);

  return (
    <div className="login">
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
      <button onClick={() => dispatch(fetchLogin({ username, password }))}>
        Login
      </button>
      <p>dont have account yet?</p>
      <Link to={"/register"}>create your account now</Link>
    </div>
  );
}
