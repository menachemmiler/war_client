import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

export default function ({ children }: PropsWithChildren) {
  const isLogin = useAppSelector((state) => state.user.user?._id);
  if (!isLogin) {
    console.log("לא מורשה !");
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
