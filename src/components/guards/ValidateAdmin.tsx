import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

export default function ({ children }: PropsWithChildren) {
  const user = useAppSelector((state) => state.user.user);
  if (user?._id && !user?.isAdmin) {
    console.log("לא מורשה !");
    return <Navigate to="/userPage" />;
  } else if (!user?._id) {
    console.log("לא מורשה !");
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
