import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { adminData } from "../../redux/slices/userSlice";

export default function AdminPage() {
  const { user: user } = useAppSelector((state) => state.user);
  const { data } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch()

  console.log({ data });


  useEffect(() => {
    dispatch(adminData());
  }, []);

  return <div className="adminpage">{data}</div>;
}
