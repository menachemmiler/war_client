import { useAppSelector } from "../../redux/store";

export default function UserPage() {
  const { user: user } = useAppSelector((state) => state.user);

  return (
    <div className="userpage">
      <h1>{`username: ${user?.username}`}</h1>
      <h2>{`isAdmin: ${user?.isAdmin}`}</h2>
      <h3>{`_id: ${user?._id}`}</h3>
    </div>
  );
}
