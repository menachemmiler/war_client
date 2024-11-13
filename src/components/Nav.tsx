import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <>
        <NavLink to={"/option 1"}>option 1 </NavLink>
        <NavLink to={"/option 2"}>option 2</NavLink>
      </>
    </div>
  );
}
